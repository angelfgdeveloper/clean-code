
(() => {

  type Gender = 'M' | 'F';

  // 1 - Forma larga
  // class Person {
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;

  //   constructor(name: string, gender: Gender, birthdate: Date) {
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }

  // }

  // 2 - Forma corta
  class Person {

    constructor( 
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}

  }

  const newPerson = new Person('Angel', 'M', new Date('1994-12-10'));
  console.log(newPerson);

})();