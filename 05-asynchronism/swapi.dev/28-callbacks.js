const fetch = require('node-fetch');

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const PERSON = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`

fetch(`${PERSON}`)
  .then((response) => response.json())
  .then(({ name }) => {
    console.log(`Hola yo soy ${name}.`);
  });
