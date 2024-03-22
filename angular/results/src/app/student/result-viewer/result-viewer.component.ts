import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
//import { ResultService } from '../result.service';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.css']
})
export class ResultViewerComponent implements OnInit {
  rollNumber: any;
  result: any;

  constructor(private route: ActivatedRoute,private rout:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rollNumber = params['rollNumber'];
     console.log( history.state);
     this.result=history.state.result;
    });
  }
  getBack(){
    this.rout.navigate(['/result-form']);
  }
}


