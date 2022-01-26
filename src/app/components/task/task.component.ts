import { Component, OnInit } from '@angular/core';
import { taskInterface } from 'src/app/task-model';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  TaskVariable: taskInterface[] = [];
  constructor(private taskServiceObj: TaskService) {}

  ngOnInit(): void {}

  AddTask(taskToBeAdded: taskInterface) {
    this.taskServiceObj
      .addTaskFromService(taskToBeAdded)
      .subscribe((taskArrayVar) => this.TaskVariable.push(taskToBeAdded));
  }
}
