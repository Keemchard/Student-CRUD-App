import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { taskInterface } from 'src/app/task-model';
import { taskArray } from 'src/app/mock-task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  taskVariable: taskInterface[] = [];
  constructor(private taskServiceObj: TaskService) {}

  ngOnInit(): void {
    //GET TASK
    this.taskServiceObj
      .getTaskFromService()
      .subscribe((taskArrayVar) => (this.taskVariable = taskArrayVar));
  }

  //DELETE TASK
  DeleteTask(task: taskInterface) {
    this.taskServiceObj
      .deleteTaskFromService(task)
      .subscribe(
        () =>
          (this.taskVariable = this.taskVariable.filter(
            (t) => t.id !== task.id
          ))
      );
  }
}
