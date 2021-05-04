import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HomepageNavigationComponent } from './homepage-navigation/homepage-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HomepageNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
