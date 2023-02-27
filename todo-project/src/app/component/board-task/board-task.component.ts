import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.scss']
})
export class BoardTaskComponent implements OnInit {
  taskForm!: FormGroup;
  pending: ITask[] = [];
  todo: ITask[] = [];
  inProgress: ITask[] = [];
  done: ITask[] = [];
  selected = 'pending';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group(
      {
        item: ['', Validators.required],
        time: [''],
        state: [''],
      }
    )
  }

  createTask() {
    if (this.selected == "pending") {
      this.pending.push(
        {
          name: this.taskForm.value.name,
          time: this.taskForm.value.time,
          state: this.taskForm.value.state
        }
      )
    } else if (this.selected == "todo") {
      this.todo.push(
        {
          name: this.taskForm.value.item,
          time: this.taskForm.value.time,
          state: this.taskForm.value.state
        }
      )
    } else if (this.selected == "inprogress") {
      this.inProgress.push(
        {
          name: this.taskForm.value.item,
          time: this.taskForm.value.time,
          state: this.taskForm.value.state
        }
      )
    } else if (this.selected == "done") {
      this.done.push(
        {
          name: this.taskForm.value.item,
          time: this.taskForm.value.time,
          state: this.taskForm.value.state
        }
      )
    }
  }

  deleteTask(i: number) {
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
