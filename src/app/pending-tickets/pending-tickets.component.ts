import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from 'src/model/pendingTickets';

@Component({
  selector: 'app-pending-tickets',
  templateUrl: './pending-tickets.component.html',
  styleUrls: ['./pending-tickets.component.css']
})
export class PendingTicketsComponent implements OnInit {
  displayedColumns: string[] = ['ticket', 'id', 'subject', 'phone', 'createdat', 'createdby'];

  pendingTickets: Ticket[] = [
    {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
    {ticket: 'TKT03241', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
    {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
    {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
    {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'},
    {ticket: 'TKT03242', id: 'KKU07189', subject: 'UNCLEAR', phone: '0778574965',createdat: 'THARSHIKA', createdby: '2021-05-18 11:45:20'}
  ];

  dataSource = new MatTableDataSource(this.pendingTickets)
  
  @ViewChild('exmTbSort') exmTbSort : MatSort

  constructor( ) {}

  ngAfterViewInit() {
    this.exmTbSort.disableClear = true;
    this.dataSource.sort = this.exmTbSort;
  }

  ngOnInit(): void {
  }


}
