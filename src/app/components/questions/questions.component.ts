import { Question, AnswerI } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionComponent implements OnInit {
  categoryId: number;
  questions: Question[] = [];
  answers: AnswerI[] = [];
  curQuestion: Question = {} as Question;
  index = 0;
  correctAnswers = 0;

  constructor(
    private router: Router,
    private questionService: QuestionService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.categoryId = Number(navigation?.extras.state?.id);
  }

  ngOnInit(): void {
    this.questionService.getQuestions(this.categoryId).subscribe((questions: Question[]) => {
      if (!questions?.length) {
        this.router.navigate(['/']);
        return;
      }

      this.questions = questions.map(q => Question.encodeQuestion(q));
      this.initQuestion();
    });
  }

  initQuestion(): void {
    this.curQuestion = this.questions[this.index++];
    this.initAnswers(this.curQuestion);
  }

  initAnswers(question: Question): void {
    this.answers = question.incorrect_answers.map(answer => ({ isCorrect: false, answer: answer }));
    this.answers.push({ isCorrect: true, answer: question.correct_answer });
    this.answers.sort((a, b) => a.answer.length - b.answer.length);
  }

  onAnswer(correct: boolean): void {
    if (this.index === 10) {
      this.router.navigate(
        ['/thanks'],
        {
          state: {
            correctAnswers: this.correctAnswers,
            questionsCount: this.index
          }
        }
      );

      return;
    }

    if (correct) {
      this.correctAnswers++;
    }
    this.initQuestion();
  }
}
