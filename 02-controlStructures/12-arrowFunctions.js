const zero = {
  nombre: 'Zero',
  apellido: 'Requiem',
  edad: 14,
};

const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad.`);
  } else {
    console.log(`${persona.nombre} es menor de edad.`);
  }
}

imprimirSiEsMayorDeEdad(zero);
