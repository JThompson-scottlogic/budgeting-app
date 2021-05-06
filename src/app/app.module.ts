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
import { GraphsHomeComponent } from './graphs-home/graphs-home.component';
import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';
import { TransactionsFilteringComponent } from './transactions-filtering/transactions-filtering.component';
import { TransactionsMonthSummaryComponent } from './transactions-month-summary/transactions-month-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HomepageNavigationComponent,
    RecentTransactionsComponent,
    HomePageComponent,
    HomepageInputComponent,
    HomepageSummaryComponent,
    GraphsHomeComponent,
    TransactionsHomeComponent,
    TransactionsFilteringComponent,
    TransactionsMonthSummaryComponent
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
