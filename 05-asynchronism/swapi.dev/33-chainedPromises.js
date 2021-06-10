const request = require('request');

const API_URL = 'https://swapi.dev/api/people';

const getPJ = (id) =>
  new Promise((resolve, reject) => {
    request(`${API_URL}/${id}`, (error, _response, body) => {
      if (error) reject(error);
      else resolve(body);
    });
  });

const getName = (data) => JSON.parse(data).name;

getPJ(1)
  .then((data) => {
    console.log(`El personaje 1 es ${getName(data)}.`);
    return getPJ(2);
  })
  .then((data) => {
    console.log(`El personaje 2 es ${getName(data)}.`);
    return getPJ(3).then((data) => {
      console.log(`El personaje 3 es ${getName(data)}.`);
      // etc
    });
  });
