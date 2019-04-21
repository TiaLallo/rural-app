export class Person {
  PersonId: number;
  Sex: string;
  Age: number;
  Nationality: string;

  // @ts-ignore
  constructor(PersonId?: number, Sex?: string, Age?: number, Nationality?: string) {
  this.PersonId = PersonId;
  this.Sex = Sex;
  this.Age = Age;
  this.Nationality = Nationality;
  }
}


