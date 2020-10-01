import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsListComponent } from './comics-list.component';

const routes: Routes = [
  { path: 'comics', component: ComicsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }