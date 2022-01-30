import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent implements OnInit {
  @Input() averageScore = 0;
  introvert = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.evaluatePersonality();
  }

  evaluatePersonality() {
    if (this.averageScore <= 5) {
      this.introvert = true;
    } else {
      this.introvert = false;
    }
  }
  back() {
    window.location.href = '/';
  }
}
