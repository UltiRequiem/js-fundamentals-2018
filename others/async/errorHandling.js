function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1); // 0 or 1, at random
    val ? resolve('Lucky!!') : reject('Nope 😠');
  });
}

const getLuckPoints = async () => {
  try {
    const luck = await yayOrNay();
    console.log(luck);
  } catch (err) {
    console.log(err);
  }
};

getLuckPoints()
