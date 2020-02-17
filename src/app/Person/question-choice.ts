export class QuestionChoice {
  questionChoiseId: number;
  leftTitle_FI: string;
  rightTitle_FI: string;
  questionId: number;
  leftTitle_EN: string;
  rightTitle_EN: string;

  constructor(questionChoiseId?: number, leftTitle_FI?: string, rightTitle_FI?: string, questionId?: number, leftTitle_EN?: string, rightTitle_EN?: string){
    this.questionChoiseId = questionChoiseId;
    this.leftTitle_FI = leftTitle_FI;
    this.rightTitle_FI = rightTitle_FI;
    this.questionId = questionId;
    this.leftTitle_EN = leftTitle_EN;
    this.rightTitle_EN = rightTitle_EN;
  }
}
