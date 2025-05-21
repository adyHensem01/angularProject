import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';

export const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'add', component: StudentFormComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' }
];