import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    this.renderChart()
  }

  renderChart(){
     const myChart = new Chart("linechart", {
     
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [3, 4, 2, 4, 5, 6, 5, 4, 5, 3, 3, 6],
          borderWidth: 2,
          borderColor: '#2CD9C5',
          // backgroundColor: '#E5FFCC',
          fill: true
        }]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

}
