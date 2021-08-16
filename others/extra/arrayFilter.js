const numbers = [0, 1, 2, 3, 4, 5, 6, 7]
// Return number if is bigger than 5
const testFunction = (number) => number > 5
// Receives a function
const arrayCopy = numbers.filter(testFunction)
console.log(arrayCopy) // [ 6, 7 ]
