const SACHA = {
  age: 12,
};

// This may change depending of the country
const LEGAL_AGE = 18;

const printIfIsLegal = ({ age }) => (age >= LEGAL_AGE ? "Es legal." : "No es legal.");

console.log(printIfIsLegal(SACHA));
