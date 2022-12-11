import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.css']
})
export class UserReportsComponent implements OnInit {

  fg : FormGroup;

  constructor(private formbuilder : FormBuilder) { 
    this.fg = this.formbuilder.group({
      eventDate1 : [],
      eventDate2 : []
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    if(! this.fg.valid){
      return;
    }
    alert('Succesfull')
  }

}
