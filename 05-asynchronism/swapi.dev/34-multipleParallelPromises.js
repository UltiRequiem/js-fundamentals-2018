const request = require('request');

const API_URL = 'https://swapi.dev/api/people';

const getPJ = (id) =>
  new Promise((resolve, reject) => {
    request(`${API_URL}/${id}`, (error, _response, body) => {
      if (error) reject(error);
      else resolve(body);
    });
  });

const getName = (data) => JSON.parse(data);
const onError = () => 'Sucedió un error.';

const pjIDs = [1, 2, 3, 4, 5];

// wow
Promise.all(pjIDs.map((id) => getPJ(id))).catch(onError);
