import { Component, OnInit, ViewChild, AfterViewInit, Renderer, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { HttpClient } from '@angular/common/http';
import { Moment } from 'moment/moment';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  task: Task = <Task>{};
  errors:Object;
  alertOpen:boolean = false;
  message:string;
  typeAlert:string;
  @ViewChild ('taskForm') form;
  constructor(private renderer: Renderer, private http: HttpClient) { }

  ngOnInit() {
  }
  onSaveTask(){
    let moment = require('moment/moment');
    let actualDate = moment().format();
    this.http.post('http://localhost:3000/task', {name: this.task.name, priority:this.task.priority, dueDate: this.task.dueDate, createdAt: actualDate, updatedAt: actualDate})
    .subscribe( taskPost => {
      this.message = "Task created succesfully";
      this.typeAlert = "success";
      this.alertOpen = true;
    },err=>{
      err.error.forEach(element => {
        this.errors[element.name] = element.message;
        this.form.controls[element.name].setErrors({"serverError":true});                    
      });      
    })
  }
  onCloseAlert(){
    this.message = "";
    this.typeAlert = "success";
    this.alertOpen = false;
  }

}

interface Task{
  name:string;
  priority: number;
  dueDate: Date;
}
