import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'graphs', component: RecentTransactionsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
