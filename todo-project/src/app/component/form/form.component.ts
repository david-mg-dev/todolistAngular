import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //taskForm: FormControl = new FormControl();
  taskForm!: FormGroup;
  task: ITask[] = [];
   
  //task: ITask;
  //task: ITask;

  //taskPending: string | undefined;
  //taskInProgress: string | undefined;
  //taskTodo: string | undefined;
  //taskDone: string | undefined;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        state: '',
        time: '',
      }
    )
  }

  createTask() {
    //const newTask: ITask = new ITask;
    //newTask.name = this.formTask.get('nameTask.value').value
  }

  sendTaskPending() {
    //this.taskPending = this.taskForm.value;
    console.log()
  }

  sendTaskInProgress() {
    //this.taskInProgress = this.taskForm.value;
  }

  sendTaskTodo() {
    //this.taskTodo = this.taskForm.value;
  }

  sendTaskDone() {
    //this.taskDone = this.taskForm.value;
  }
}
