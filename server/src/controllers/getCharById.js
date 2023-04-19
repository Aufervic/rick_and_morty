const axios = require('axios')

const getCharById = (res, id) => {
  

  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then(({data}) => {
    const {id, name, gender, species, origin, image, status} = data

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({
      id,
      name,
      gender,
      species,
      origin,
      image,
      status
    }))
  })
  .catch((error) => {
    console.log("Error")
    res.writeHead(500, {'Content-Type': 'text/plain'})
                   })

}

module.exports = {
  getCharById
}