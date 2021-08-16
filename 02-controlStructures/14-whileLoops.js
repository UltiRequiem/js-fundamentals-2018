const zero = {
  nombre: 'Zero',
  apellido: 'Requiem',
  edad: 14,
  peso: 60,
}

console.log(`Al inicio del año ${zero.nombre} pesa ${zero.peso}kg.`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO)
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO)
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = zero.peso - 3
let dias = 0

while (zero.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(zero)
  }
  if (realizaDeporte()) {
    adelgazar(zero)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${zero.nombre} adelgazó 3kg.`)
