const zero = {
  nombre: 'Zero',
  apellido: 'Requiem',
  edad: 14,
  peso: 60,
};

console.log(`Al inicio del año ${zero.nombre} pesa ${zero.peso}kg.`);

const INCREMENTO_PESO = 0.2;
const DAYS_ON_YEAR = 365;

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);

for (let i = 1; i <= DAYS_ON_YEAR; i++) {
  const random = Math.random();
  if (random < 0.25) {
    aumentarDePeso(zero);
  } else if (random < 0.5) {
    adelgazar(zero);
  }
}

console.log(`Al final del año ${zero.nombre} pesa ${zero.peso.toFixed(1)}kg.`);
