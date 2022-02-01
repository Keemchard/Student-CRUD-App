import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { taskInterface } from 'src/app/task-model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<taskInterface> = new EventEmitter();
  task_title: string = '';
  task_date: string = '';
  task_reminder: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    let titleVar: HTMLInputElement = document.querySelector('#task_title');
    let dayVar: HTMLInputElement = document.querySelector('#task_date');
    let reminderVar: HTMLInputElement =
      document.querySelector('#task_reminder');

    if (titleVar.value == '' || dayVar.value == '' || reminderVar.value == '') {
      alert('Please fill up all the input in that forms!');
      return;
    }
    const newTask = {
      task_title: this.task_title, // so dito dapat pareho ng name sa taskinterface or sa model
      task_date: this.task_date, //likedsa task interface, nalakagay is task_date, so dito dapat same name task date, as well as in other object
      task_reminder: this.task_reminder,
    };

    // lets emit event here
    this.onAddTask.emit(newTask);

    this.task_title = '';
    this.task_date = '';
    this.task_reminder = false;

    document.location.reload();
  }
}
