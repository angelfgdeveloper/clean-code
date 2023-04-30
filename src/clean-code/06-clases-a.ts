
(() => {

  // No aplicando el principio de responsabilidad unica

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
      public name     : string,
      public gender   : Gender,
      public birthdate: Date,
    ) {}

  }

  // const newPerson = new Person('Angel', 'M', new Date('1994-12-10'));
  // console.log(newPerson);

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email      : string,
      public role       : string,

      //** Heredados
      name              : string,
      gender            : Gender,
      birthdate         : Date,
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }

  }

  class UserSettings extends User {

    constructor(
      public workingDirectory: string,
      public lastOpenFolder  : string,

      //** Heredados
      email                  : string,
      role                   : string,
      name                   : string,
      gender                 : Gender,
      birthdate              : Date,
    ) {
      super(email, role, name, gender, birthdate);
    }

  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'angel@google.com',
    'Admin',
    'Angel',
    'M',
    new Date('1996-10-12')
  );

  // console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });
  console.log({ userSettings });

})();