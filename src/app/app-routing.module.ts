import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { GraphsHomeComponent } from './graphs-home/graphs-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'graphs', component: GraphsHomeComponent},
  { path: 'transactions', component: TransactionsHomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
