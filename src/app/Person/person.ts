export class Person {
  personId: number;
  Sex: string;
  Age: number;
  Nationality: string;

  // @ts-ignore
  constructor(personId?: number, Sex?: string, Age?: number, Nationality?: string) {
  this.personId = personId;
  this.Sex = Sex;
  this.Age = Age;
  this.Nationality = Nationality;
  }
}


