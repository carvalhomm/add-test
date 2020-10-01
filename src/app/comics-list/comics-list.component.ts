import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';
import { Comic } from '../models/Comic.interface';
import { ComicViewComponent } from './comic-view/comic-view.component';
import { ComicsService } from './comics.service';

@Component({
  selector: 'add-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  public listItems: Comic[] = [];
  public loading = true;
  private search: string;
  private offSet = 0;
  private limit = 10;
  private routeParam: string;
  private detailsSubscription: Subscription;
  private destroy = new Subject<void>();
  constructor(private fb: FormBuilder, private comicsService: ComicsService, private dialog: MatDialog) { }

@HostListener('window:scroll', ['$event'])
onWindowScroll() {
  const topPosition = window.innerHeight + window.scrollY;
  const scrollPosition = document.body.scrollHeight;
  if (scrollPosition - topPosition <= 3 && !this.routeParam) {
    this.offSet += 10;
    this.keepListUpdated();
  }
}

  ngOnInit(): void {
    this.initFormGroup();
    this.routeParam = history.state.comicResourceUri;
    console.log('histry --> ', history.state);
    if (this.routeParam) {
      this.keepListUpdated(this.routeParam);
    } else {
      this.keepListUpdated();
    }
  }

  ngOnDestroy(): void {
    if (this.detailsSubscription) {
      this.detailsSubscription.unsubscribe();
    }
    this.destroy.next();
    this.destroy.complete();
  }

  public openDetails(details: any) {
    this.detailsSubscription = this.dialog.open(ComicViewComponent, {
      data: details
    }).afterClosed().pipe(take(1)).subscribe((choice: boolean) => {
      // if (choice)
      if (this.routeParam) {
        this.routeParam = null;
        this.offSet = 0;
        this.listItems = [];
        this.loading = true;
        this.keepListUpdated();
      }
    });
  }

  private initFormGroup() {
    this.formGroup = this.fb.group({
      search: [null]
    });
    this.formGroup.get('search').valueChanges.pipe(delay(500), takeUntil(this.destroy)).subscribe(search => {
      this.search = search;
      if (search && !this.routeParam) {
        this.offSet = 0;
        this.limit = 10;
      }
      if (!this.routeParam) {
        this.keepListUpdated();
      }
    });
  }

  private keepListUpdated(comicResourceUri?: string) {
    this.comicsService.callComicsApi(this.search, this.offSet, this.limit, 'title', comicResourceUri).then(comics => {
      console.log('value API --> ', comics);
      if (!comics) { return; }
      if (comics.error) { return; }
      if (comics.mode === 'initial') {
        this.listItems = comics.data as Comic[];
      } else {
        this.listItems = this.listItems.concat(comics.data as Comic[]);
      }
      this.loading = false;
      if (this.routeParam) { this.openDetails(comics.data[0]); }
    }).catch(err => {
      console.log('error calling API ----> ', err);
    });
  }

}
