import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  QueAns = [{
    "que" : "qwert1"
  },
{
  "que":"qwerty2"
}]

  constructor() { }

  ngOnInit() {
  }

}
