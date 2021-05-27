const ZERO = {
  username: "Zero",
  age: 14,
  peso: 60,
};

const increaseWeigth = (person) => (person.peso += 0.2);
const decreaseWeigth = (person) => (person.peso -= 0.2);

console.log(`Al inicio del año ${ZERO.username} pesa ${ZERO.peso} kilos.`);

for (let i = 1; i <= 365; i++) {
  let RANDOM = Math.random();
  if (RANDOM < 0.25) {
    increaseWeigth(ZERO);
  } else if (RANDOM < 0.5) {
    decreaseWeigth(ZERO);
  }
}
console.log(`Al final del año ${ZERO.username} pesa ${Math.round(ZERO.peso)} kilos.`);
