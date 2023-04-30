
(() => {

  // No aplicando el principio de responsabilidad unica

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date;
    gender   : Gender;
    name     : string;
  }

  class Person {
    public birthdate: Date;
    public gender   : Gender;
    public name     : string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name      = name;
      this.gender    = gender;
      this.birthdate = birthdate;
    }

  }

  interface UserProps {
    email      : string;
    role       : string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email     : string;
    public role      : string;

    constructor(
      { email, role }: UserProps,

      //** Heredados
      personProps: PersonProps
    ) {
      super(personProps);
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }

  }

  interface UserSettingsProps {
    lastOpenFolder  : string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenFolder  : string;
    public workingDirectory: string;

    constructor(
      { workingDirectory, lastOpenFolder }: UserSettingsProps,

      //** Heredados
      userProps  : UserProps,
      personProps: PersonProps,
    ) {
      super(userProps, personProps);
      this.lastOpenFolder   = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }

  }

  // const userSettings = new UserSettings(
  //   '/usr/home',
  //   '/home',
  //   'angel@google.com',
  //   'Admin',
  //   'Angel',
  //   'M',
  //   new Date('1996-10-12')
  // );

  // // console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });
  // console.log({ userSettings });

})();