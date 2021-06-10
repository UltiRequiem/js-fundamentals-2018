const scaryClown = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('🤡'), 2000);
  });

const msg = async () => {
  console.log('Message:', await scaryClown());
};

msg();
