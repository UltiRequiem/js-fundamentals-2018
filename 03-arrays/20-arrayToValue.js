const martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 132,
};

const dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 990,
};

const vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 91,
};

const paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 182,
};

const personas = [martin, dario, vicky, paula];

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

const totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros.`);
