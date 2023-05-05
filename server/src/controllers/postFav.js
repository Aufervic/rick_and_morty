const {Favorite} = require('../DB_connection')

const postFav = async (req, res) => {
  const {name, origin, status, image, species, gender} = req.body

  if(!name || !origin || !status || !image || !species || !gender){
    return res.status(401).send('Faltan datos')
  }

  try {
    
    const [favorite, created] = await Favorite.findOrCreate({
      where: {name},
      defaults: {name, origin, status, image, species, gender}
    })
  
    const favorites = await Favorite.findAll()

    created ? res.status(200).json(favorites): res.status(400).json('No se agregó porque ya existe')
    //res.status(200).json(favorites)
  } catch (error) {
    res.status(500).json({error: error.message})
  }

}

module.exports = postFav