import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  currentlyOpenedItemIndex = -1;

  items = [
    {
      icon:'../../assets/ticket-perforated.svg',
      head:'Ticket',
      item:[
        {href: 'createticket', name:'Create Tickets'},
        {href: 'pendingtickets', name:'Pending Tickets'},
        {href: '#', name:'Assigned Tickets'},
        {href: '#', name:'Closed Tickets'},
        {href: '#', name:'Canceled Tickets'},
      ]
    },
    {
      icon:'../../assets/person-add.svg',
      head:'Requests',
      item:[
        {href: '#', name:'All Requests'},
        {href: '#', name:'Pending Requests'},
        {href: '#', name:'Cancelled Tickets'}
      ]
    },
    {
      icon:'../../assets/arrow-down-up.svg',
      head:'Connections',
      item:[
        {href: '#', name:'All Connections'},
        {href: 'newconnection', name:'New Connections'},
        {href: '#', name:'After Connections'}
      ]
    },
    {
      icon:'../../assets/credit-card.svg',
      head:'Payment',
      item:[
        {href: '#', name:'Make Payment'},
        {href: '#', name:'Adjust Payment'},
        {href: 'addarrears', name:'Add Arrears'},
        {href: '#', name:'Add Rental'}
      ]
    },
    {
      icon:'../../assets/bug.svg',
      head:'Reports',
      item:[
        {href: 'userreports', name:'User Reports'},
        {href: '#', name:'Collection Reports'},
        {href: '#', name:'Due Reports'},
        {href: '#', name:'Unpaid Reports'}
      ]
    },
    {
      icon:'../../assets/gear.svg',
      head:'settings',
      item:[
        {href: 'user', name:'User'},
        {href: '#', name:'Roles'},
        {href: '#', name:'Roads'},
        {href: '#', name:'Areas'},
        {href: '#', name:'Branches'}
      ]
    }
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

  setOpened(itemIndex: number){
    this.currentlyOpenedItemIndex = itemIndex;
  }
  
  setClosed(itemIndex: number) {
    if (this.currentlyOpenedItemIndex === itemIndex) {
      this.currentlyOpenedItemIndex = -1;
    }
  }
}

