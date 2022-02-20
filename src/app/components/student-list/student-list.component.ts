import { Component, OnInit } from '@angular/core';
import { studentInterface } from 'src/app/student-model';
import { studentArray } from '../mock-student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  studentVariable: studentInterface[] = [];

  constructor(private studentServiceObj: StudentService) {}

  ngOnInit(): void {
    this.studentServiceObj
      .getStudentFromService()
      .subscribe((s) => (this.studentVariable = s));
  }

  deleteStudent(studentToBeDeleted: studentInterface) {
    this.studentServiceObj
      .deleteStudentFromService(studentToBeDeleted)
      .subscribe(
        () =>
          (this.studentVariable = this.studentVariable.filter(
            (s) => s.id !== studentToBeDeleted.id
          ))
      );
  }
}
