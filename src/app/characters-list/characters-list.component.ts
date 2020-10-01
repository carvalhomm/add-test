import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';
import { Character } from '../models/Character.interface';
import { CharacterViewComponent } from './character-view/character-view.component';
import { CharactersService } from './characters.service';

@Component({
  selector: 'add-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup;
  public listItems: Character[] = [];
  public loading = true;
  private search: string;
  private offSet = 0;
  private limit = 10;
  private routeParam: string;
  private detailsSubscription: Subscription;
  private destroy = new Subject<void>();
  constructor(private fb: FormBuilder, private charactersService: CharactersService, private dialog: MatDialog) { }

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
    this.routeParam = history.state.characterName;
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
    this.detailsSubscription = this.dialog.open(CharacterViewComponent, {
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

  private keepListUpdated(nomePersonagem?: string) {
    this.charactersService.callCharactersApi(this.search, this.offSet, this.limit, 'name', nomePersonagem).then(characters => {
      if (!characters) { return; }
      if (characters.error) { return; }
      if (characters.mode === 'initial') {
        this.listItems = characters.data as Character[];
      } else {
        this.listItems = this.listItems.concat(characters.data as Character[]);
      }
      this.loading = false;
      if (this.routeParam) { this.openDetails(characters.data[0]); }
    }).catch(err => {
      console.log('error calling API ----> ', err);
    });
  }

}
