const arrNames = [{ name: 'Zero', lastName: 'Requiem', age: 28 }, { name: 'Eren', lastName: 'Esuno', age: 24 }];

function printNameInUppercase(person) {
  console.log(person.name.toUpperCase());
}

// const printNameInUppercase = (person) => console.log(person.name.toUpperCase());

printNameInUppercase(arrNames[1]);
