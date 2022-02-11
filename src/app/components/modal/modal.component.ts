import { ScoreService } from './../../services/score.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  scores = [] as string[];
  constructor(private scoreService: ScoreService) {
    this.scores = this.scoreService.getScores();
  }
}
