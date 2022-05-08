const axios = require('axios')

axios.post('https://jsonplaceholder.typicode.com/users', {
    name: 'riddhi',
    email: 'riddhi@gmail.com'
  }).then(response => {
    console.log(response)
  }).catch(error => {
    console.error(error)
  })