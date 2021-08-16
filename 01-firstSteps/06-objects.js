const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
}

/**
 * @param {object} person: A person.
 * @returns {string}: Name to Uppercase.
 */
function imprimirNombreEnMayusculas({ nombre: person }) {
  return person.toUpperCase()
}

console.log(imprimirNombreEnMayusculas(sacha))
