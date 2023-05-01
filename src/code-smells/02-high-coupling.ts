(() => {

  // No aplicando el principio de responsabilidad única
  
  type Gender = 'M' | 'F';

  // Alto Acoplamiento

  class Person {

    constructor(
      public name     : string,
      public gender   : Gender,
      public birthdate: Date
    ) {}

  }

  class User extends Person {

    constructor(
      public email      : string,
      public role       : string,
      private lastAccess: Date,
      name              : string,
      gender            : Gender,
      birthdate         : Date
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
      public lastFolderOpen  : string,
      email                  : string,
      role                   : string,
      name                   : string,
      gender                 : Gender,
      birthdate              : Date
    ) {
      super(email, role, new Date(), name, gender, birthdate);
    }

  }

  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'angel@google.com',
    'M',
    'Angel',
    'M',
    new Date('1994-10-12')
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });

})();
