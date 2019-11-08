

export class Question {
  questionId: number;
  title_FI: string;
  title_EN: string;

  // @ts-ignore
  constructor(questionId?: number, title_FI?: string, title_EN?: string) {
    this.questionId = questionId;
    this.title_FI = title_FI;
    this.title_EN = title_EN;
  }
}
