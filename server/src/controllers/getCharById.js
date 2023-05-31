require('dotenv').config()
const axios = require('axios')

const { API_URL} =  process.env

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
    const {data} = await axios.get(`${API_URL}/${id}`)

    success(data, res)
    
  }catch(error){
    errorHandler(error, res)
  }
  
}

module.exports = {
  getCharById
}