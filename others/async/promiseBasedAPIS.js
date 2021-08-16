const fetch = require('node-fetch')

const fetchUsers = async (endpoint) => {
  const res = await fetch(endpoint)
  const data = await res.json()
  console.log(data.map((user) => user.username))
}

fetchUsers('https://jsonplaceholder.typicode.com/users')
