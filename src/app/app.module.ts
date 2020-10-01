import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.routes';
import { AppComponent } from './app.component';
import { ComicsListModule } from './comics-list/comics-list.module';
import { CharactersListModule } from './characters-list/characters-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ComicsListModule,
    CharactersListModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
