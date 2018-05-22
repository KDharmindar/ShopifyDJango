import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {

  task:FormGroup;

  constructor(fb:FormBuilder) {
    this.task = fb.group({
      site:'',
      type:'',
      size:0,
      billingProfile:'',
      proxy:'',
      checkoutType:'',
      quantity:0
    });
  }

  ngOnInit() {
  }

  createTask(){
    alert('Task Created!');
    console.log(this.task)
  }

}
