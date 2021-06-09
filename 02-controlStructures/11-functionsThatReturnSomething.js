const zero = {
  nombre: 'Zero',
  apellido: 'Requiem',
  edad: 14,
};

const LEGAL_AGE = 18;

function isLegal({ edad }) {
  return edad >= LEGAL_AGE;
}

function returnIfIsLegal(persona) {
  if (isLegal(persona)) {
    return `${persona.nombre} es mayor de edad.`;
  }
  return `${persona.nombre} es menor de edad.`;
}

console.log(returnIfIsLegal(zero));
