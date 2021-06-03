const myName = 'Zero';
const myAge = 14;

/**
 * @param {string} name: Your name.
 * @param {number} age: Your age.
 * @returns {string}: A pressentation.
 */
function introduceMySelf(name, age) {
  return `Hi! My name is ${name} and I'm ${age} years old.`;
}

console.log(introduceMySelf(myName, myAge));
