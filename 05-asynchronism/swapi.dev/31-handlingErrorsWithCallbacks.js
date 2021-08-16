/*
 *  Para solucionar el problema de quedarnos sin conexión, u otro error similar,
 *  en medio de una sucesión de callbacks utilizamos el método fail().
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, callback).fail(() => {
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
  })
}

obtenerPersonaje(1, (personaje) => {
  console.log(`Hola, yo soy ${personaje.name}`)

  obtenerPersonaje(2, (personaje) => {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(3, (personaje) => {
      console.log(`Hola, yo soy ${personaje.name}`)

      obtenerPersonaje(4, (personaje) => {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(5, (personaje) => {
          console.log(`Hola, yo soy ${personaje.name}`)

          obtenerPersonaje(6, (personaje) => {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(7, (personaje) => {
              console.log(`Hola, yo soy ${personaje.name}`)
            })
          })
        })
      })
    })
  })
})
