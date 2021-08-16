// No asincronismo, de esta forma.
const request = require('request')

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/n'

function getPJ(id) {
  request(
    `${API_URL}${PEOPLE_URL.replace('n', id)}`,
    (_error, _response, body) => {
      const pjData = JSON.parse(body)
      console.log(`Hola soy ${pjData.name}.`)
    }
  )
}

getPJ(1)
getPJ(2)
getPJ(3)

// Algunos llegan undefined XD
// for (let i = 0; i < 100;i++){
//  getPJ(i)
// }
