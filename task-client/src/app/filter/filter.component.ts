import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Moment } from 'moment/moment'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  moment = require('moment');
pendingTasks : Task;
overdueTasks : Task;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let pendingQuery = ['dueDate','>=', this.moment().format()];
    let overdueQuery = ['dueDate','<', this.moment().format()];
    this.http.get<Task>('http://localhost:3000/task',{
      params:{
        where : JSON.stringify([pendingQuery])
      }
    }).subscribe( data =>{
        this.pendingTasks = data;
    })
    this.http.get<Task>('http://localhost:3000/task', {
      params:{
        where : JSON.stringify([overdueQuery])
      }
    }).subscribe( data =>{
      this.overdueTasks = data;
  })
  }

}

interface Task{
  name: string;
  dueDate: Date;
  priority: number;
}