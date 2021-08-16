/*
 * Un callback es una función que se pasa a otra función como un argumento.
 * Esta función se invoca, después, dentro de la función externa para completar alguna acción.
 */

const fetch = require('node-fetch')

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/n'

const PERSON = `${API_URL}${PEOPLE_URL.replace('n', 4)}`

fetch(`${PERSON}`)
  .then((response) => response.json())
  .then(({ name }) => {
    console.log(`Hola yo soy ${name}.`)
  })
