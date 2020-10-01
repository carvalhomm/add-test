import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list.component';
import { ComicsRoutingModule } from './comics.routes';
import { ComicViewComponent } from './comic-view/comic-view.component';
import { SharedModule } from '../shared/shared.module';
import { ComicsService } from './comics.service';

@NgModule({
  declarations: [ComicsListComponent, ComicViewComponent],
  imports: [
    ComicsRoutingModule,
    SharedModule,
  ],
  providers: [
    ComicsService
  ]
})
export class ComicsListModule { }
