const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = (n) => {
  let mensaje
  if (n >= MAYORIA_DE_EDAD) {
    mensaje = 'Es mayor de edad.'
  } else {
    mensaje = 'Es menor de edad.'
  }
  console.log(mensaje)
}

for (let i = 1; i <= 20; i++) {
  esMayorDeEdad(i)
}
