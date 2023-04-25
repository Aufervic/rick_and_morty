const axios = require('axios')

const URL = 'https://be-a-rym.up.railway.app/api'
const KEY = '8084360b4c34.9565dd748a2bc62f3aa9'


const success = (data, res) =>{
  const {id, name, gender, species, origin, image, status} = data
  if(id)
    res.status(200).json({id, name, gender, species, origin, image, status})
  else
    res.status(404).send('Not fount')
}

const errorHandler = (error, res) => {
 
  res.status(500).send(error.message)
}



const getCharById = async (req, res) => {
  try{
    const {id}= req.params
  
    const {data} = await axios.get(`${URL}/character/${id}?key=${KEY}`)

    success(data, res)
    
  }catch(err){
    errorHandler(error, res)
  }
  
}

module.exports = {
  getCharById
}