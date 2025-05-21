import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student, StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  student: Student = {
    name: '', email: '', phone: ''
  };

  constructor(private studentService: StudentService) {}

  submit() {
    this.studentService.addStudent(this.student).subscribe(() => {
      alert('Student added!');
      this.student = { name: '', email: '', phone: '' };
    });
  }

}
