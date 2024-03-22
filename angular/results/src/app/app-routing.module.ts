import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './teacher/add-student/add-student.component';
import { ViewAllResultsComponent } from './teacher/view-all-results/view-all-results.component';
import { ResultViewerComponent } from './student/result-viewer/result-viewer.component';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { HomeComponent } from './home/home.component';
import { ResultFormComponent } from './student/result-form/result-form.component';
import { EditStudentComponent } from './teacher/edit-student/edit-student.component';


const routes: Routes = [
  {path: 'teacher/view-all-results',component:TeacherModule},
  {path: 'student/add-student',component:StudentModule},
  { path: 'add-student', component: AddStudentComponent },
  {path: 'view-all-results',component:ViewAllResultsComponent},
  {path: 'result-viewer',component:ResultViewerComponent},
  { path: 'result-viewer/:rollNumber', component: ResultViewerComponent },
  {path: '',component:HomeComponent},
  {path: 'result-form',component:ResultFormComponent},
  {path: 'edit-student',component:EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
