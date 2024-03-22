import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllResultsComponent } from './view-all-results/view-all-results.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  { path: '', component: ViewAllResultsComponent },
 
];



@NgModule({
  declarations: [
    ViewAllResultsComponent,
    AddStudentComponent,
    EditStudentComponent,
 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
   
    ViewAllResultsComponent,
    AddStudentComponent,
    EditStudentComponent
  ]
})
export class TeacherModule { }
