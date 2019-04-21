export class QuestionChoice {
  QuestionChoiceId: number;
  LeftTitle: string;
  RightTitle: string;
  QuestionId: number;

  constructor(QuestionChoiceId?: number, LeftTitle?: string, RightTitle?: string, QuestionId?: number){
    this.QuestionChoiceId = QuestionChoiceId;
    this.LeftTitle = LeftTitle;
    this.RightTitle = RightTitle;
    this.QuestionId = QuestionId;
  }
}
