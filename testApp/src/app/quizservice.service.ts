import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  constructor(public http:HttpClient) { }

  loadQuiz():Observable<quiz[]>{
    return this.http.get<quiz[]>("/assets/quiz.json");
  }
}


