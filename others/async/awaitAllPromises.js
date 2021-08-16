const who = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('The Clown')
    }, 100)
  })

const what = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('lurks')
    }, 100)
  })

const where = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('in the shadows')
    }, 300)
  })

const msg = async () => {
  const [a, b, c] = await Promise.all([who(), what(), where()])
  console.log(`${a} ${b} ${c}.`)
}

msg() // The Clown lurks in the shadows. <-- after 500ms
