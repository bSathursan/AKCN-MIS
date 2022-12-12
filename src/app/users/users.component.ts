import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {User} from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'branch', 'status', 'createdat'];

  Userdata : User[] = [
    {id: 'AK190004', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
    {id: 'AK190001', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
    {id: 'AK190004', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
    {id: 'AK190004', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
    {id: 'AK190004', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
    {id: 'AK190004', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
    {id: 'AK190004', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''}
  ];
  
  dataSource = new MatTableDataSource(this.Userdata)
  dataSourceWithPageSize = new MatTableDataSource(this.Userdata);

  constructor() {}
  @ViewChild('paginator') paginator : MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;
  @ViewChild('exmTbSort') exmTbSort : MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;

    this.exmTbSort.disableClear = true;
    this.dataSource.sort = this.exmTbSort;
  }

  ngOnInit(): void {}
}
