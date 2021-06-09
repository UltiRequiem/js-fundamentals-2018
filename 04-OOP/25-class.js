class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age}.`);
  }

  soyMayorDeEdad() {
    return this.age > 18;
  }
}

class Developer extends Person {
  constructor(name, age, language, twitter) {
    super(name, age);
    this.language = language;
    this.twitter = twitter;
  }

  sayHi() {
    console.log(
      `Hi, my name is ${this.name}, I'm ${this.age} and I code in ${this.language}.`
    );
  }

  promoteTwitter() {
    console.log(`My Twitter is https://twitter.com/${this.twitter}.`);
  }
}

// In the day I'm a Person, but in the night...
const Eliaz = new Person('Eliaz Bobadilla', 14);
Eliaz.sayHi();

// I'm a Developer
const UltiRequiem = new Developer(
  'UltiRequiem',
  14,
  'Python and JavaScript',
  'UltiRequiem'
);
UltiRequiem.sayHi();
UltiRequiem.promoteTwitter();
