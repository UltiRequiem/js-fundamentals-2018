const sacha = {
  name: 'Sacha',
  lastname: 'Lifszyc',
  altura: 1.72,
};

const alan = {
  name: 'Alan',
  lastname: 'Perez',
  altura: 1.86,
};

const martin = {
  name: 'Martin',
  lastname: 'Gomez',
  altura: 1.85,
};

const dario = {
  name: 'Dario',
  lastname: 'Juarez',
  altura: 1.71,
};

const vicky = {
  name: 'Vicky',
  lastname: 'Zapata',
  altura: 1.56,
};

const paula = {
  name: 'Paula',
  lastname: 'Barros',
  altura: 1.76,
};

const persons = [sacha, alan, martin, dario, vicky, paula];

const esBajo = ({ altura }) => altura <= 1.79;
const esAlta = ({ altura }) => altura >= 1.8;

const personasAltas = persons.filter(esAlta);
const personasBajas = persons.filter(esBajo);

console.log('Las personas altas son:');

for (let i = 0; i < personasAltas.length; i++) {
  console.log(` - ${personasAltas[i].name}`);
}

console.log('Las personas bajas son:');

for (let i = 0; i < personasBajas.length; i++) {
  console.log(` - ${personasBajas[i].name}`);
}
