import { Question } from '../models/question.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private _http: HttpClient) { }

  private getQuestionsUrl(category_id: number): string {
    return `https://opentdb.com/api.php?amount=10&category=${category_id}&encode=base64`;
  }

  getQuestions(category_id: number): Observable<Question[]> {
    return this._http.get(this.getQuestionsUrl(category_id)).pipe(
      map((questionsPayload: any) => {
        if (!questionsPayload.response_code) {
          return questionsPayload.results;
        }
      })
    );
  }
}