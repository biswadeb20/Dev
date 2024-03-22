import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css']
})
export class ResultFormComponent {
  rollNumber: any;
  dateOfBirth: any;
  result:[]=[];

  constructor(private router: Router, private resultService: ResultService) { }

    viewResult() {
    this.resultService.getResult(this.rollNumber)
      .subscribe(result => {
        console.log(result);
        //this.router.navigate(['result-viewer',this.rollNumber])
        this.router.navigate(['result-viewer', this.rollNumber], { state: { result: result } });
      }, error => {
        console.log('Error:', error);
      });
  }  
 
 
  
  
}

