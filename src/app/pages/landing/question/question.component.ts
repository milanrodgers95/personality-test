import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer, Questionnaire } from '../../models/pesonality.models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: Questionnaire = {} as Questionnaire;
  @Input() totalQuestion = 0;
  @Input() currentIndex = 0;
  @Output() questionChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() finishTesting: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  previousQuestion() {
    this.currentIndex -= 1;
    this.questionChange.emit(this.currentIndex);
  }

  nextQuestion() {
    this.currentIndex += 1;
    this.questionChange.emit(this.currentIndex);
  }

  finish() {
    this.finishTesting.emit();
  }

  onSelectionChange(entry: Answer) {
    for (const answer of this.question.answers) {
      answer.selected = false;
    }
    entry.selected = true;
  }
}
