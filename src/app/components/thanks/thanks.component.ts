import { ScoreService } from './../../services/score.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  correctAnswers: number;
  questionsCount: number;

  constructor(
    private router: Router,
    private scoreService: ScoreService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.correctAnswers = navigation?.extras.state?.correctAnswers;
    this.questionsCount = navigation?.extras.state?.questionsCount;
  }

  ngOnInit(): void {
    this.scoreService.submitScore(this.correctAnswers);
  }
}