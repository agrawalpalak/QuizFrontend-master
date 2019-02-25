import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  que : any = {};
  
  constructor(private rest: RestService) { }

  ngOnInit() {
    // this.rest.addQuestion().subscribe(resp => {
    //   console.log(resp); 
    // }); 
  }

}
