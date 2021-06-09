const fetch = require('node-fetch');

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/n';

function getPJ(id) {
  fetch(`${API_URL}${PEOPLE_URL.replace('n', id)}`)
    .then((response) => response.json())
    .then(({ name }) => {
      console.log(`Hola yo soy ${name}.`);
    });
}

getPJ(4);
getPJ(6);
