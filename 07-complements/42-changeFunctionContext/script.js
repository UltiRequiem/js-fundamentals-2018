const ZERO = {
  name: 'Zero',
  age: 14,
}

function sayHi(saludo = 'Hola') {
  console.log(`${saludo}, mi nombre es ${this.name}.`)
}

const saludar = sayHi.bind(ZERO, 'Hola we')

saludar()

// sayHi.call(ZERO,'Hola we');
// sayHi.apply(ZERO, ['Hol we']);
