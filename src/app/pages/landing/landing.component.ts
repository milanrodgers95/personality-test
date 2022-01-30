import { Component, OnInit } from '@angular/core';
import { QuestionMockup } from '../models/pesonality.config';
import { Questionnaire } from '../models/pesonality.models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  questions = QuestionMockup;
  currentQuestion: Questionnaire = {} as Questionnaire;
  currentIndex = 0;
  currentProgress = 0;
  isFinish = false;
  averageScore = 0;
  constructor() {}

  ngOnInit(): void {
    this.getCurrentQuestion();
  }

  getCurrentQuestion() {
    this.currentQuestion = this.questions[this.currentIndex];
    this.updateProgressBar();
  }

  questionChange(index: number) {
    this.currentIndex = index;
    this.getCurrentQuestion();
  }

  updateProgressBar() {
    this.currentProgress =
      ((this.currentIndex + 1) * 100) / this.questions.length;
  }

  finishTesting() {
    this.isFinish = true;
    this.getScore();
  }

  getScore() {
    let totalScore = 0;
    for (const question of this.questions) {
      const answer = question.answers.find((x) => x.selected === true);
      if (answer) {
        totalScore += answer.score;
      }
    }
    this.averageScore = totalScore / this.questions.length;
  }
}
