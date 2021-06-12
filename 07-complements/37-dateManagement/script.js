const diasEntreFechas = (fecha1, fecha2) => {
  const unDia = 86400000;
  const diferencia = Math.abs(fecha1 - fecha2);

  return Math.floor(diferencia / unDia);
};

const hoy = new Date();
const nacimiento = new Date(2006, 10, 13);

console.log(diasEntreFechas(hoy, nacimiento));
