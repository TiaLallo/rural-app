export class Summary {
  Summary: any;
  PersonId: number;
  QuestionChoiseId: number;
  LeftValue: number;
  RightValue: number;

  constructor(Summary?: any, PersonId?: number, QuestionChoiseId?: number, LeftValue?: number, RightValue?: number) {
    this.Summary = Summary;
    this.PersonId = PersonId;
    this.QuestionChoiseId = QuestionChoiseId;
    this.LeftValue = LeftValue;
    this.RightValue = RightValue;
  }
}

