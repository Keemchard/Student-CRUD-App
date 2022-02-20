import { Component, OnInit } from '@angular/core';
import { studentInterface } from './student-model';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularApplications';
  studentVar: studentInterface[] = [];
  constructor(private studentServiceObj: StudentService) {}

  ngOnInit(): void {}

  addStudent(studentToBeAdded: studentInterface) {
    this.studentServiceObj
      .addStudentFromService(studentToBeAdded)
      .subscribe((s) => this.studentVar.push(studentToBeAdded));

    document.location.reload();
  }
}
