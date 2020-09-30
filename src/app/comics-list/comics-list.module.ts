import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list.component';
import { ComicsRoutingModule } from './comics.routes';
import { ComicViewComponent } from './comic-view/comic-view.component';



@NgModule({
  declarations: [ComicsListComponent, ComicViewComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ],
  exports: [
    ComicsRoutingModule
  ]
})
export class ComicsListModule { }
