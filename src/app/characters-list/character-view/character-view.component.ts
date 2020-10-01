import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'add-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data, private matRef: MatDialogRef<CharacterViewComponent>) { }

  ngOnInit(): void {
  }

  public closeDialog() {
    this.matRef.close(true);
  }

}
