const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
}

const dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27,
}

function imprimirNombreEnMayusculas(persona) {
  const { nombre } = persona
  return nombre.toUpperCase()
}

console.log(imprimirNombreEnMayusculas(sacha))
console.log(imprimirNombreEnMayusculas(dario))
