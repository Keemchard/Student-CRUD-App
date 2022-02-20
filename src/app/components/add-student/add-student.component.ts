import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { studentInterface } from 'src/app/student-model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  exitAddForm() {
    let mainFormCon: HTMLDivElement = document.querySelector('.add-main-con');
    mainFormCon.style.display = 'none';
  }

  name: string;
  email: string;
  course: string;
  @Output() onAddStudent: EventEmitter<studentInterface> = new EventEmitter();
  onSubmit() {
    const newStudent: studentInterface = {
      name: this.name,
      email: this.email,
      course: this.course,
    };
    this.onAddStudent.emit(newStudent);
    this.name = '';
    this.email = '';
    this.course = '';
  }
}
