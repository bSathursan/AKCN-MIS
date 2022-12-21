import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArrearsComponent } from './add-arrears/add-arrears.component';
import { CreateTicketsComponent } from './create-tickets/create-tickets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NewConnectionComponent } from './new-connection/new-connection.component';
import { PendingTicketsComponent } from './pending-tickets/pending-tickets.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'createticket', component:CreateTicketsComponent},
  {path:'newconnection', component:NewConnectionComponent},
  {path:'addarrears', component:AddArrearsComponent},
  {path:'userreports', component:UserReportsComponent},
  {path:'pendingtickets', component:PendingTicketsComponent},
  {path:'user', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
