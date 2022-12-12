import { NgModule } from "@angular/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
    exports:[
       MatSidenavModule,
       MatToolbarModule,
       MatMenuModule,
       MatIconModule,
       MatDividerModule,
       MatListModule,
       MatExpansionModule,
       MatDatepickerModule,
       MatNativeDateModule,
       MatSortModule,
       MatTableModule,
       MatButtonModule,
       MatPaginatorModule
    ]
})

export class MaterialModule{

}