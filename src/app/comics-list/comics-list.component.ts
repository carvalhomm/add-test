import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { ComicViewComponent } from './comic-view/comic-view.component';
import { ComicsService } from './comics.service';

@Component({
  selector: 'add-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  public listItems: any[];
  private search: string;
  private offSet = 0;
  private limit = 10;
  private detailsSubscription: Subscription;
  private destroy = new Subject<void>();
  constructor(private fb: FormBuilder, private comicsService: ComicsService, private dialog: MatDialog) { }

@HostListener('window:scroll', ['$event'])
onWindowScroll() {
  const topPosition = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  const scrollPosition = document.documentElement.scrollHeight;
  if (topPosition === scrollPosition ) {
    this.offSet += 10;
    this.limit += 10;
    this.keepListUpdated();
  }
}

  ngOnInit(): void {
    this.initFormGroup();
    this.keepListUpdated();
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
    }).afterClosed().subscribe((choice: boolean) => {
      // if (choice)
    });
  }

  private initFormGroup() {
    this.formGroup = this.fb.group({
      search: [null]
    });
    this.formGroup.get('search').valueChanges.pipe(delay(300), takeUntil(this.destroy)).subscribe(search => {
      this.search = search;
      this.keepListUpdated();
    });
  }

  private keepListUpdated() {
    this.comicsService.callComicsApi(this.search, this.offSet, this.limit, 'title').then(value => {
      console.log('value API --> ', value);
    }).catch(err => {
      console.log('error calling API ----> ', err);
    });
  }

}
