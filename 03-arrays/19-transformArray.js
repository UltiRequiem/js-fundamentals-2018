const martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
};

const dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
};

const vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
};

const paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
};

const esAlta = ({ altura }) => altura > 1.8;

const persons = [martin, dario, vicky, paula];

const pasarAlturaACms = (persona) => ({
  ...persona,
  altura: persona.altura * 100,
});

const personasCms = persons.map(pasarAlturaACms);

// Original persons
console.log(persons);
// New persons
console.log(personasCms);
