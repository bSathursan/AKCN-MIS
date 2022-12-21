import { Component, ViewChild, AfterViewInit, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User, dataset } from '../../model/user';
import {SortableHeaderDirective, SortEvent, compare} from '../../sort/user.sort'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  data : Array<User> = dataset;
  Users : Array<User> = dataset;
  @ViewChildren(SortableHeaderDirective)
  headers: QueryList<SortableHeaderDirective>;
  config : any;

  constructor() {
    this.config = {
      itemsPerPage : 5,
      currentPage : 1,
      totalItems : this.Users
    }
  }

  ngOnInit(): void {
  }
  onSort({column, direction}: SortEvent){
    //reset other headerss
    this.headers.forEach((header: { sortable: string; direction: string; }) => {
      if(header.sortable !== column){
        header.direction ='';
      }
    });

    //sorting
    if(direction === '' || column === ''){
      this.Users = this.data;
    } else {
      this.Users = [...this.data].sort((a,b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      })
    }
  }

  pageChanged(event: any){
    this.config.currentPage = event;  
  }
}
