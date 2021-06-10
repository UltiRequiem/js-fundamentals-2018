const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
};

const esMayorDeEdad = (persona) => {
  let mensaje;
  const MAYORIA_DE_EDAD = 18;
  if (persona.edad >= MAYORIA_DE_EDAD) {
    mensaje = 'Es mayor de edad';
  } else {
    mensaje = 'Es menor de edad';
  }
  console.log(mensaje);
};

for (let i = 1; i <= 10; i++) {
  console.log(`Terminó el ciclo for, el valor de "i" es ${i}.`);
}
