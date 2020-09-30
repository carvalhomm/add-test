import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list.component';
import { CharactersRoutingModule } from './characters.routes';
import { CharacterViewComponent } from './character-view/character-view.component';



@NgModule({
  declarations: [CharactersListComponent, CharacterViewComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  exports: [
    CharactersRoutingModule
  ],
  providers: []
})
export class CharactersListModule { }
