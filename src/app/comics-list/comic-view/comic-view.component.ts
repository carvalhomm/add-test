import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-comic-view',
  templateUrl: './comic-view.component.html',
  styleUrls: ['./comic-view.component.scss']
})
export class ComicViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data, private matRef: MatDialogRef<ComicViewComponent>) { }

  ngOnInit(): void {
  }

  public closeDialog() {
    this.matRef.close(true);
  }

}
