import { Component, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { datasets, Ticket } from 'src/model/pendingTickets';
import {SortableHeaderDirectivetic, SortEvent, compare} from '../../sort/ticket.sort';

@Component({
  selector: 'app-pending-tickets',
  templateUrl: './pending-tickets.component.html',
  styleUrls: ['./pending-tickets.component.css']
})
export class PendingTicketsComponent implements OnInit {

  data : Array<Ticket> = datasets;
  Tickets : Array<Ticket> = datasets;
  @ViewChildren(SortableHeaderDirectivetic)
  headers: QueryList<SortableHeaderDirectivetic>;
  
  constructor( ) {}

  ngOnInit() {
  }
  onSort({column, direction}: SortEvent){
    //reset other headerss
    this.headers.forEach((header: { sortabletic: string; direction: string; }) => {
      if(header.sortabletic!== column){
        header.direction ='';
      }
    });

    //sorting
    if(direction === '' || column === ''){
      this.Tickets = this.data;
    } else {
      this.Tickets = [...this.data].sort((a,b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      })
    }
  }


}
