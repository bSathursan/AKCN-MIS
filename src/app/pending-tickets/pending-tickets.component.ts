import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  ticket: string;
  id: string;
  subject: string;
  phone: string;
  createdby : string;
  createdat : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
  {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
  {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
  {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
  {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
  {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'}
];


@Component({
  selector: 'app-pending-tickets',
  templateUrl: './pending-tickets.component.html',
  styleUrls: ['./pending-tickets.component.css']
})
export class PendingTicketsComponent implements OnInit {
  displayedColumns: string[] = ['ticket', 'id', 'subject', 'phone', 'createdat', 'createdby'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatSort) sort : MatSort

  constructor( ) { }
  finaldata:any

  ngOnInit(): void {
    if(this.sort){
      this.dataSource.sort
    }
  }


}
