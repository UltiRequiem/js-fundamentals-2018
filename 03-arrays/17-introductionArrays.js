const sacha = {
  name: 'Sacha',
  lastname: 'Lifszyc',
  height: 1.72,
};

const dario = {
  name: 'Dario',
  lastname: 'Juarez',
  height: 1.71,
};

const vicky = {
  name: 'Vicky',
  lastname: 'Zapata',
  height: 1.56,
};

const paula = {
  name: 'Paula',
  lastname: 'Barros',
  height: 1.76,
};

const persons = [sacha, dario, vicky, paula];

for (let i = 0; i < persons.length; i++) {
  const person = persons[i];
  console.table(`${person.name} ${person.lastname} measures ${person.height} mts.`);
}
