export interface Questionnaire {
  id: number;
  question: string;
  answers: Answer[];
}
export interface Answer {
  name: string;
  score: number;
  selected: boolean;
}
