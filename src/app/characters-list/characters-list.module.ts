import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list.component';
import { CharactersRoutingModule } from './characters.routes';
import { CharacterViewComponent } from './character-view/character-view.component';
import { SharedModule } from '../shared/shared.module';
import { CharactersService } from './characters.service';

@NgModule({
  declarations: [CharactersListComponent, CharacterViewComponent],
  imports: [
    CharactersRoutingModule,
    SharedModule
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersListModule { }
