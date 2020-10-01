import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Comic } from 'src/app/models/Comic.interface';

@Component({
  selector: 'add-comic-view',
  templateUrl: './comic-view.component.html',
  styleUrls: ['./comic-view.component.scss']
})
export class ComicViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Comic, private matRef: MatDialogRef<ComicViewComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  public getReleaseDate(): string {
    const data = this.data.dates.find(dd => dd.type === 'onsaleDate');
    return new Date(data.date).toLocaleDateString('pt-Br');
  }

  public openCharacterDetails(name: string) {
    this.router.navigate(['characters'], { state: { characterName: name }});
    this.closeDialog();
  }

  public closeDialog() {
    this.matRef.close(true);
  }

}
