import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Student, StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  imports: [NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  
    students: Student[] = [];

     constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  deleteStudent(name: string) {
    this.studentService.deleteStudent(name).subscribe(() => {
      this.loadStudents();
    });
  }

}
