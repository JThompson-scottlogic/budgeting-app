import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HomepageNavigationComponent } from './homepage-navigation/homepage-navigation.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomepageInputComponent } from './homepage-input/homepage-input.component';
import { HomepageSummaryComponent } from './homepage-summary/homepage-summary.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HomepageNavigationComponent,
    RecentTransactionsComponent,
    HomePageComponent,
    HomepageInputComponent,
    HomepageSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
