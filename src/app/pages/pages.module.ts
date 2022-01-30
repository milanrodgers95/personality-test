import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { PagesRoutingModule } from './page-routing.module';
import { QuestionComponent } from './landing/question/question.component';
import { EvaluationComponent } from './landing/evaluation/evaluation.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LandingComponent, QuestionComponent, EvaluationComponent],
  imports: [PagesRoutingModule, BrowserModule, FormsModule],
})
export class PagesModule {}
