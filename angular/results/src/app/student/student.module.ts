import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ResultFormComponent } from './result-form/result-form.component';
import { ResultViewerComponent } from './result-viewer/result-viewer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ResultFormComponent }
];


@NgModule({
  declarations: [

    ResultViewerComponent,
    ResultFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)

  ],
  exports: [
    ResultViewerComponent,
    ResultFormComponent

  ]

})
export class StudentModule { }
