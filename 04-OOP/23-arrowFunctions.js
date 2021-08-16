function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

Person.prototype.sayHi = function () {
  console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`)
}

// Not Gonna Work
Person.prototype.soyAlto = () => this.altura > 1.8

const zero = new Person('Zero Requiem', 14, 1.69)
zero.sayHi()
console.log(zero.soyAlto())
