import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentId: any;
  student: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = +params['id']; 
      this.fetchStudentDetails();
    });
  }

  fetchStudentDetails() {
    // Send an HTTP request to fetch the student details by ID from the server
    this.http.get<any>(`http://localhost:5000/students/${this.studentId}`)
      .subscribe(response => {
        this.student = response;
      });
  }

  updateStudent() {
    // Send an HTTP request to update the student details on the server
    this.http.put<any>(`http://localhost:5000/students/${this.studentId}`, this.student)
      .subscribe(response => {
        // Handle the response or perform any additional actions
        console.log('Student updated successfully!');
      });
  }
}
