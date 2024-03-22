// view-all-results.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from './view-all-results.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-results',
  templateUrl: './view-all-results.component.html',
  styleUrls: ['./view-all-results.component.css']
})
export class ViewAllResultsComponent implements OnInit {
 students: any[]=[];

  constructor(private apiService: ApiService, private router: Router ) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.apiService.getStudents().subscribe(
      (data: any[]) => {
        this.students = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addStudent() {
    // Navigate to the "add-student" page
    this.router.navigate(['/add-student']);
  }

  deleteStudent(student: any) {
    const confirmDelete = confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      const index = this.students.indexOf(student);
      if (index !== -1) {
        this.students.splice(index, 1);
      }
      this.apiService.deleteStudentByRollNo(student.PersonID).subscribe(
        () => {
          // Handle successful deletion
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  editStudent(student: any) {
    // Assuming the route to the edit student component is 'edit-student/:id'
    this.router.navigate(['/edit-student', student.PersonID]);
  }
  
}
