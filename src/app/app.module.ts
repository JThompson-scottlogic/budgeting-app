import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HomepageNavigationComponent } from './homepage-navigation/homepage-navigation.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HomepageNavigationComponent,
    RecentTransactionsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
