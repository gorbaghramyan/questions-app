import { LocalStorageService } from './localStorage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private SCORE = 'score';

  constructor(private localStorage: LocalStorageService) { }

  submitScore(correctAnswersCount: number): void {
    if (isNaN(correctAnswersCount)) {
      return;
    }

    let score = this.localStorage.get(this.SCORE);
    score.push(correctAnswersCount.toString());
    score.sort((a, b) => Number(b) - Number(a));
    this.localStorage.set(this.SCORE, score.slice(0, 10).toString());
  }

  getScores(): string[] {
    return this.localStorage.get(this.SCORE);
  }
}
