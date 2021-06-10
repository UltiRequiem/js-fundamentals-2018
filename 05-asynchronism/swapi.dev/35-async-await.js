/* Async-await es la manera más simple y clara de realizar tareas asíncronas.
 * Await detiene la ejecución del programa hasta que todas las promesas sean resueltas.
 * Para poder utilizar esta forma, hay que colocar async antes de la definición de la función,
 * y encerrar el llamado a Promises.all() dentro de un bloque try … catch.
 */
const request = require('request');

const API_URL = 'https://swapi.dev/api/people';

const getPJdata = (id) =>
  new Promise((resolve, reject) => {
    request(`${API_URL}/${id}`, (error, _response, body) => {
      if (error) reject(error);
      else resolve(body);
    });
  });

const getName = (data) => JSON.parse(data);
const onError = () => 'Sucedió un error.';

const getPersonajes = async () => {
  const pjIDs = [1, 2, 3, 4, 5];
  const promises = pjIDs.map((id) => getPJdata(id));
  const personajes = await Promise.all(promises);

  Promise.all(promises)
    .then((pj) => console.log(pj))
    .catch(onError);
};
