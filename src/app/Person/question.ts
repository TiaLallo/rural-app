export class Question {
  QuestionId: number;
  TitleFI: string;
  TitleEN: string;

  // @ts-ignore
  constructor(QuestionId?: number, TitleFI?: string, TitleEN?: string) {
    this.QuestionId = QuestionId;
    this.TitleFI = TitleFI;
    this.TitleEN = TitleEN;
  }
}
