import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: 'login', component: LoginpageComponent, data: {title: 'Login'}},
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  // {path: '**', component: LoginpageComponent}
  {path: '', component:HomeComponent , pathMatch: 'full'},
  {path: 'login', component:LoginpageComponent , pathMatch: 'full'},
  {path: 'dashboard', component:DashboardComponent , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
