// Person Sacha
const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
}

// Person Dario
const dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27,
}

function imprimirNombreEnMayusculas(persona) {
  const { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

function birthday(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  }
}
