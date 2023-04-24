
let myFavorites = []

const postFav = (req, res) => {
  const character = req.body
  myFavorites.push(character)

  res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
  const {id} = req.params
  myFavorites = myFavorites.filter((mf)=> mf.id.toString() !== id.toString())

  res.status(200).json(myFavorites)
}


module.exports =  {
  postFav,
  deleteFav
}