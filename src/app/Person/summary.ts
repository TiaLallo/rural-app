export class Summary {
  Summary: any;
  PersonId: number;
  QuestionChoiceId: number;
  LeftValue: number;
  RightValue: number;

  constructor(Summary?: any, PersonId?: number, QuestionChoiceId?: number, LeftValue?: number, RightValue?: number) {
    this.Summary = Summary;
    this.PersonId = PersonId;
    this.QuestionChoiceId = QuestionChoiceId;
    this.LeftValue = LeftValue;
    this.RightValue = RightValue;
  }
}

