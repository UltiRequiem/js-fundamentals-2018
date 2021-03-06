const request = require('request')

const API_URL = 'https://swapi.dev/api/people'

const getPJ = (id) =>
  new Promise((resolve, reject) => {
    request(`${API_URL}/${id}`, (error, _response, body) => {
      if (error) reject(error)
      else resolve(body)
    })
  })

const getName = (data) => JSON.parse(data).name

for (let i = 1; i <= 15; i++) {
  getPJ(i).then((data) => {
    console.log(`El personaje ${i} es ${getName(data)}.`)
  })
}
