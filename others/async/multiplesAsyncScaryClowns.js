const who = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('The Clown');
    }, 200);
  });

const what = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('lurks');
    }, 300);
  });

const where = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('in the shadows');
    }, 500);
  });

const msg = async () => {
  const clown = await who(); // The Clown
  const doing = await what(); // lurks
  const place = await where(); // in the shadows.

  console.log(`${clown} ${doing} ${place}.`);
};

msg(); // The Clown lurks in the shadows. <-- after 1 second
