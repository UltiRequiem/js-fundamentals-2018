// Declare a function that returns a promise that resolves to a value of '🤡' after 2 seconds

const scaryClown = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('🤡'), 2000)
  })

const msg = async () => console.log('Message:', await scaryClown())

msg() // Message: 🤡 <-- after 2 seconds
