const {Favorite} = require('../DB_connection')
 
const getFavs = async (req, res) => {
  try{
    const favorites = await Favorite.findAll()

    res.status(200).json(favorites)
  }catch(error){
    res.status(500).json({error: error.message})
  }
}

module.exports = getFavs