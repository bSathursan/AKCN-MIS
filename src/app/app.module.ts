import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialModule} from 'src/MaterialModule';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateTicketsComponent } from './create-tickets/create-tickets.component';
import { NewConnectionComponent } from './new-connection/new-connection.component';
import { AddArrearsComponent } from './add-arrears/add-arrears.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { PendingTicketsComponent } from './pending-tickets/pending-tickets.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    CreateTicketsComponent,
    NewConnectionComponent,
    AddArrearsComponent,
    UserReportsComponent,
    PendingTicketsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
