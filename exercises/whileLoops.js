const ZERO = {
  username: "Zero",
  age: 14,
  peso: 60,
};

const META = 55;

const increaseWeigth = (person) => (person.peso += 0.2);
const decreaseWeigth = (person) => (person.peso -= 0.2);

const eatALot = () => Math.random() < 0.3;
const doExercises = () => Math.random() < 0.4;

let days = 0;

while (ZERO.peso > META) {
  if (eatALot()) {
    increaseWeigth(ZERO);
  } else if (doExercises()) {
    decreaseWeigth(ZERO);
  }
  days++;
}

console.log(
  `Pasaron ${days} dias hasta que ${ZERO.username} llegara a su meta.`
);
