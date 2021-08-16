class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHi(fn) {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age}.`)
    if (fn) {
      fn(this.name, false)
    }
  }

  soyMayorDeEdad() {
    return this.age > 18
  }
}

class Developer extends Person {
  constructor(name, age, language, twitter) {
    super(name, age)
    this.twitter = twitter
  }

  sayHi(fn) {
    console.log(
      `Hi, my name is ${this.name}, I'm ${this.age} and I'm developer.`
    )
    if (fn) {
      fn(this.name, true)
    }
  }
}

function responderSaludo(name, esDev) {
  console.log(`Buen día ${name}.`)
  if (esDev) {
    console.log('Wow, no sabía que eras dev.')
  }
}

// Persons

const Eliaz = new Person('Eliaz Bobadilla', 14)
const Ligth = new Person('Ligth Yagami', 23)
const Kokun = new Person('Son Goku', 52)

// ...
Eliaz.sayHi()
// Buen día!
Ligth.sayHi(responderSaludo)
// Buen día Kokun!
Kokun.sayHi(responderSaludo)

// Devs
const UltiRequiem = new Developer('UltiRequiem', 14)
UltiRequiem.sayHi(responderSaludo)
