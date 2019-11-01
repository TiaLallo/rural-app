export class QuestionChoice {
  questionChoiseId: number;
  leftTitle: string;
  rightTitle: string;
  questionId: number;

  constructor(questionChoiseId?: number, leftTitle?: string, rightTitle?: string, questionId?: number){
    this.questionChoiseId = questionChoiseId;
    this.leftTitle = leftTitle;
    this.rightTitle = rightTitle;
    this.questionId = questionId;
  }
}
