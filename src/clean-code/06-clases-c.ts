
(() => {

  // Aplicando el principio de responsabilidad unica
  // Priorizar la composicion frente a la herencia

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
    email    : string;
    role     : string;
  }

  class User {
    public email     : string;
    public lastAccess: Date;
    public role      : string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email      = email;
      this.role       = role;
    }

    checkCredentials() {
      return true;
    }

  }

  interface SettingsProps {
    lastOpenFolder  : string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder  : string;
    public workingDirectory: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder   = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }

  }

  // Clase de composicion de las otras clases
  interface UserSettingsProps {
    birthdate       : Date;
    email           : string;
    gender          : Gender;
    lastOpenFolder  : string;
    name            : string;
    role            : string;
    workingDirectory: string;
  }

  // Responsabilidad unica
  class UserSettings {

    public person  : Person;
    public settings: Settings;
    public user    : User;

    constructor({
      name, gender, birthdate, // person
      email, role, // user
      lastOpenFolder, workingDirectory, // settings
    }: UserSettingsProps) {
      this.person   = new Person({ name, gender, birthdate });
      this.user     = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }

  }

  const userSettings = new UserSettings({
    birthdate: new Date('1996-10-12'),
    email: 'angel@google.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Angel',
    role: 'Admin',
    workingDirectory: '/usr/home',
  });

  console.log({ 
    userSettings, 
    areCredentialsValid: userSettings.user.checkCredentials() 
  });

  // console.log({ userSettings });

})();