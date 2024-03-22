import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'result';

  constructor(private route:Router){}
 
  getTeacher(){
    this.route.navigate(['teacher/view-all-results']);
  };
  getStudent(){
     this.route.navigate(['student/add-student']);
  }
}
