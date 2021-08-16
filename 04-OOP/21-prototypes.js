function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

Person.prototype.sayHi = function () {
  console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`)
}

Person.prototype.soyAlto = function () {
  if (this.height >= 1.8) {
    console.log('Soy alto.')
  } else {
    console.log('No soy alto.')
  }
}

// Supe duper Pythonic
// class Person {
//  constructor(name, age, height) {
//    this.name = name;
//    this.age = age;
//    this.height = height;
//  }
//
//  sayHi() {
//    console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`);
//  }
//
//  soyAlto() {
//    if (this.height >= 1.8) {
//      console.log('Soy alto.');
//    } else {
//      console.log('No soy alto.');
//    }
//  }
// }

const zero = new Person('Zero Requiem', 14, 1.69)
zero.sayHi()
zero.soyAlto()
