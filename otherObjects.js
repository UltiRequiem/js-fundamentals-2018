const sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
  musico: false,
  ingeniero: true,
  proffesion: "Coder",
};

const printProfessions = ({ nombre, proffesion }) => console.log(`${nombre} es ${proffesion}.`);

printProfessions(sacha);
