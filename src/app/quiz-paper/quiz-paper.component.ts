import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-quiz-paper',
  templateUrl: './quiz-paper.component.html',
  styleUrls: ['./quiz-paper.component.css']
})

export class QuizPaperComponent implements OnInit {

  QueAns = [{
    "que": "qweerty",
    "ans": {
      "option1" : "a",
      "option2" : "b",
      "option3" : "c",
      "option4" : "d"
    }
    },{
      "que": "qweerty2",
      "ans": {
        "option1" : "a2",
        "option2" : "b2",
        "option3" : "c2",
        "option4" : "d2"
      }
    }]
  constructor(private auth: AuthService) { }

  countDown;
  counter = 600;
  tick = 1000;
  ngOnInit() {
    this.countDown = Observable.timer(0, this.tick).take(this.counter).map(() => --this.counter);

    this.auth.getConfig().subscribe(resp => {
      console.log(resp);
    }); 
  }
}
@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }
}
