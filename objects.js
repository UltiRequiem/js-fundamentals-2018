const arrNames = [{ name: 'Zero', lastName: 'Requiem', age: 28 }, { name: 'Eren', lastName: 'Esuno', age: 24 }];

const nameDos = {
  name: 'Zero', lastName: 'Requiem', age: 28, propiedad: 'ksks',
};

const additionsal = {
  city: 'Zero', country: 'Requiem', age: 28, propiedad: 'ksks',
};

const functiona = ({ name, age }) => console.log(`${name},${age}`);
/**
 * @param {object} payload
 * @param {string}payload.name
 * @param {number}payload.age
 *
 * */
const functionaaaDos = (payload) => {
  const { name, age } = payload;
  console.log(`${name},${age}`);
};

// function printNameInUppercase(person) {
//  console.log(person.name.toUpperCase());
// }

// const printNameInUppercase = (person) => console.log(person.name.toUpperCase());

// printNameInUppercase(arrNames[1]);
functiona({ ...nameDos, ...additionsal, age: 50 });
functionaaaDos({ ...nameDos, ...additionsal, age: 50 });
