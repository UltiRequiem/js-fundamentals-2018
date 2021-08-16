const crearSaludo = (finalDeFrase) => (nombre) => {
  console.log(`Hola ${nombre} ${finalDeFrase}.`)
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoPeruano = crearSaludo('we')
const saludoColombiano = crearSaludo('parce')

saludoArgentino('Sacha') // Hola Sacha che.
saludoPeruano('Zero')
saludoMexicano('Sacha') // Hola Sacha wey.
saludoColombiano('Sacha') // Hola Sacha amigo.

// Funciones currificadas
crearSaludo('Pedro')('amigo')
