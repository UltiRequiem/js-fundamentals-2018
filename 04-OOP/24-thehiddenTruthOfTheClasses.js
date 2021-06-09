function heredaDe(prototypoHijo, prototypoPadre) {
  const fn = function () {};
  fn.prototype = prototypoPadre.prototype;
  prototypoHijo.prototype = new fn();
  prototypoHijo.prototype.constructor = prototypoHijo;
}

// Person Class
function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

Person.prototype.sayHi = function () {
  console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`);
};

Person.prototype.soyAlto = function () {
  if (this.height >= 1.8) {
    console.log('Soy alto.');
  } else {
    console.log('No soy alto.');
  }
};

// Developer Class
function Developer(name, language) {
  this.name = name;
  this.language = language;
}
heredaDe(Developer, Person);

Developer.prototype.sayHi = function () {
  console.log(`Hola me llamo ${this.nombre} y programo en ${this.language}.`);
};

const zero = new Person('Zero', 14, 1.67);
const zeroRequiem = new Developer('Zero Requiem', 'Python');
zeroRequiem.sayHi();
