const axios = require('axios')

axios
  .post('http://localhost:3000/login', {
    username: 'teste',
    password: '123',
  })
  .then((response) => console.log(response.data))
