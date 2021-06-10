const fetch = require('node-fetch');

const API_URL = 'https://swapi.dev/api/people/n';

const PERSON = `${API_URL.replace('n', 4)}`;

fetch(`${PERSON}`)
  .then((response) => response.json())
  .then(({ name }) => {
    if (name === 'Darth Vader') {
      console.log('Yo soy tu Padre.');
    } else {
      console.log(`Me llamo ${name}.`);
    }
  });
