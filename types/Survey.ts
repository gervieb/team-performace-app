export interface ISurvey {
  question: string;
  questionId: number;
  answer: number;
  psychological_safety: string;
  isAnswered?: boolean;
}
