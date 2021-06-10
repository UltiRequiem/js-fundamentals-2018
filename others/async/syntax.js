const scaryClown = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('🤡'), 2000); // Async Function Expression
  });

async function msgFunctionOne() {
  const msgTwo = await scaryClown();
  console.log('Message:', msgTwo);
};

// Async Arrow Function
const msgFunctionTwo = async () => {
  const msgOne = await scaryClown();
  console.log('Message:', msgOne);
};
