import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/Character.interface';

@Component({
  selector: 'add-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Character, private matRef: MatDialogRef<CharacterViewComponent>,
              private router: Router) { }

  ngOnInit(): void {
  }

  public openComicDetails(resourceUri: string) {
    this.router.navigate(['comics'], { state: { comicResourceUri: resourceUri.split('/comics/')[1] }});
    this.closeDialog();
  }

  public closeDialog() {
    this.matRef.close(true);
  }

}
