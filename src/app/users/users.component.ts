import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  id: string;
  name: string;
  role: string;
  branch: string;
  status : string;
  createdat : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'AK190001', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
  {id: 'AK190001', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
  {id: 'AK190001', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
  {id: 'AK190001', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
  {id: 'AK190001', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
  {id: 'AK190001', name: 'ALEX KUMAR', role: 'ADMIN', branch: 'HEAD QUARTERS - KALMUNAI',status: 'THARSHIKA',createdat: ''},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'branch', 'status', 'createdat'];
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
