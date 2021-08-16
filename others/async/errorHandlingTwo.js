const caserUpper = (val) =>
  new Promise((resolve, reject) => {
    resolve(val.toUpperCase())
  })

const msg = async (x) => {
  try {
    const message = await caserUpper(x)
    console.log(message)
  } catch (err) {
    console.log(`Ohh no... ${err.message} :(`)
  }
}

msg('JavaScript is as Nice as Neovim.')
msg(34) // Ohh no: val.toUpperCase is not a function
