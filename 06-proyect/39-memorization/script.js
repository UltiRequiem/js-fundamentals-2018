/*
        !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
        !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6
*/

function factorial(n) {
  // Si es que no existe el cache aun, crealo.
  if (!this.cache) {
    this.cache = {};
  }

  // Si es que ya has echo esta operación antes, envia el resultado que te salio esa vez.
  if (this.cache[n]) {
    return this.cache[n];
  }

  // Si es que es uno retorna uno.
  if (n === 1) {
    return n;
  }

  // El cahche de este n es igual a n por la llamada recursiva de esta misma función pasandole n - 1.
  this.cache[n] = n * factorial(n - 1);
  return this.cache[n];
}

console.log(factorial(4));
