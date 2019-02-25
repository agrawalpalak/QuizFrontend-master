import { Injectable } from '@angular/core';
import { BASE_URL } from '../base_url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }
  getAllQuestions(): Observable<any> {
    return this.http.get<any>(BASE_URL + "getAllQuestions", this.httpOptions).pipe(map(this.extractData));
  }

  addQuestion(): Observable<any> {
    // now returns an Observable of Config
    console.log("auth called");
    return this.http.post<any>(BASE_URL + "addQuestion", this.httpOptions).pipe(map(this.extractData));
  }

  deleteQuestionById(id): Observable<any> {
    // now returns an Observable of Config
    console.log("auth called");
    return this.http.delete(BASE_URL + "deleteQuestionById");
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
