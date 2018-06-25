import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreatetaskService } from '../service/createtask.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {
  task:FormGroup;
   errors={
    site:'Please enter valid site',
    type:'Please choose type',
    size:'Please enter valid size',
    proxy:'please enter valid proxy',
    checkoutType:'please choose checkoutType',
    quantity:'Please enter quantity'
  };
  constructor(fb:FormBuilder, private createtaskservice:CreatetaskService, private router:Router) {
    this.task = fb.group({
      site:['',[Validators.pattern("^(http[s]?:\\/\\/){0,1}(www\\.){0,1}[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,5}[\\.]{0,1}$"), Validators.required]],
      type:['',Validators.required],
      size:[null,[Validators.pattern('[0-9]*'),Validators.required]],
      proxy:['',[Validators.pattern("(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"), Validators.required]],
      checkoutType:['',Validators.required],
      quantity:[null,[Validators.pattern('[0-9]*'),Validators.required]]
    });
  }

  ngOnInit() {

  }

  createTask(){
    console.log(this.task.value);
    
    this.createtaskservice.taskCreator(this.task.value)
            .subscribe(
                data => {
                  console.log("success");
                  //clear all forms
                    data=data.json();
                    if (data['stat'] === 'success'){
                      //save data succesfully alert
                      alert("Task is created.");
                      Swal("Nice!", "Task is created.", "success");
                      this.task.reset();
                    }
                    this.router.navigate(['/home/task-creator']);
                },
                error => {
                  //alert errors
        });    
  }
}
