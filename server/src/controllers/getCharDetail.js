const axios = require('axios')

const KEY = 'https://be-a-rym.up.railway.app/api'
const URL = '8084360b4c34.9565dd748a2bc62f3aa9'


const success = (data, res) =>{
  const {id, name, gender, species, origin, image, status} = data
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
}

const errorHandler = (error, res) => {
  onsole.log("Error")
  res.writeHead(500, {'Content-Type': 'text/plain'})
  res.end(error.message)
}



const getCharDetail = (res, id) => {
  
  axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then(({data}) => success(data, res))
    .catch((error) => errorHandler(error, res))
}

module.exports = {
  getCharDetail
}