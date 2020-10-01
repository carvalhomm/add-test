import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Comic } from 'src/app/models/Comic.interface';

@Component({
  selector: 'add-comic-view',
  templateUrl: './comic-view.component.html',
  styleUrls: ['./comic-view.component.scss']
})
export class ComicViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Comic, private matRef: MatDialogRef<ComicViewComponent>) { }

  ngOnInit(): void {
  }

  public getReleaseDate(): string {
    const data = this.data.dates.find(dd => dd.type === 'onsaleDate');
    return new Date(data.date).toLocaleDateString('pt-Br');
  }

  public openCharacterDetails(resourceUri: string) {
    console.log('resource --> ', resourceUri);
  }

  public closeDialog() {
    this.matRef.close(true);
  }

}
