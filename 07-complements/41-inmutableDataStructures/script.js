const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
}

const cumpleanosInmutable = (persona) => ({
  ...persona,
  edad: persona.edad + 1,
})

const sachaViejo = cumpleanosInmutable(sacha)
console.log(sacha)
console.log(sachaViejo)
