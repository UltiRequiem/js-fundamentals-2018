const hello = async () => 'Hello Alligator!';

// const b = hello();
// console.log(b); // [object Promise] { ... }

// Since what’s returned is a promise, you could do something like this instead:
//
// async function hello() {
//  return 'Hello Alligator!';
// }
//
// const b = hello();
//
// b.then(x => console.log(x)); // Hello Alligator!

// Hello Alligator!
hello().then((string) => console.log(string));
