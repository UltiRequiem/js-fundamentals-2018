const date = new Date()

const dateNow = {
  anio: date.getFullYear(),
  mes: date.getMonth(),
  dia: date.getDay(),
}

console.log(`Hoy es: ${dateNow.dia}-${dateNow.mes}-${dateNow.anio}`)
