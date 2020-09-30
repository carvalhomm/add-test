import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.routes';
import { AppComponent } from './app.component';
import { ComicsListModule } from './comics-list/comics-list.module';
import { CharactersListModule } from './characters-list/characters-list.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComicsListModule,
    CharactersListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
