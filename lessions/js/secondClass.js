const myName = 'eliaz'.toUpperCase();
const myLastName = 'bobadilla'.toUpperCase();

const fullName = `${myName} ${myLastName}`;

const firsLetterOfMyName = myName.charAt(0);
const totalLettersInMyName = myName.length;

const eli = myName.substr(0, 3);

console.log(`My full name is ${fullName}.`);
console.log(`The first letter of my name is ${firsLetterOfMyName}.`);
console.log(`The three first letters of my name are ${eli}.`);
console.log(`My name has ${totalLettersInMyName} letters.`);
