import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Student {

  name: string;
  email: string;
  phone: string;
}


@Injectable({
  providedIn: 'root'
})

export class StudentService {
  //replace with your codespace URL
  private baseUrl = '/students';
  constructor(private http: HttpClient) { }

   getStudents(): Observable<Student[]> {
      return this.http.get<Student[]>(this.baseUrl);
    }

    addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student);
  }

   deleteStudent(name: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${name}`);
  }
}
 
