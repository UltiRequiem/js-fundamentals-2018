const yayOrNay = () =>
  new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1); // 0 or 1, at random
    // 1 = True, 0 = False. Si es que es true sera la primera opción, osea Lucky.
    val ? resolve('Lucky!!') : reject('Nope 😠');
  });

const getLuckPoints = async () => {
  try {
    const luck = await yayOrNay();
    console.log(luck);
    // getLuckPoints().catch(x => console.log(x));
  } catch (err) {
    console.log(err);
  }
};

for (let i = 1; i <= 10; i++) {
  getLuckPoints();
}
