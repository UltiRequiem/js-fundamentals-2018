const precioDeVino = 12.6;
const vinosAComprar = 3;

// const totalConst = precioDeVino * vinosAComprar;
const totalCost = (precioDeVino * 100 * vinosAComprar) / 100;
console.log(`El precio total de los vinos es ${Math.round(totalCost)} soles.`);

// parseFloat() --> str to float --> float() in Python
