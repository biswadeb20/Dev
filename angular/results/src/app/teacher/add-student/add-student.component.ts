import { Component } from '@angular/core';
import { ApiService } from './add-student.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  student = {
    name: '',
    roll_no: '',
    date_of_birth: '',
    score: ''
  };

  constructor(private apiService: ApiService,private route:Router) {}

  addStudent(): void {
    this.apiService.addStudent(this.student).subscribe(
      (response) => {
        console.log('Student added successfully:', response);
       
      },
      (error) => {
        console.error('Failed to add student:', error);
      
      }
    );
  }
  getBack(){
    this.route.navigate(['/view-all-results']);
  }
  getClear(){
    this.student = {
      name: '',
      roll_no: '',
      date_of_birth: '',
      score: ''
    };
    
  }

 
}
