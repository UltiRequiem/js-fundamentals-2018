const request = require('request');

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/n';

function getPJ(id, cb) {
  request(
    `${API_URL}${PEOPLE_URL.replace('n', id)}`,
    (_error, _response, body) => {
      const pjData = JSON.parse(body);
      console.log(`Hola soy ${pjData.name}.`);
    }
  );
  if (cb) {
    cb();
  }
}

getPJ(1, () => {
  getPJ(2, () => {
    getPJ(3, () => {
      getPJ(4, () => {
        getPJ(5, () => {
          getPJ(6);
        });
      });
    });
  });
});
