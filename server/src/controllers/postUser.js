const {User} = require('../DB_connection')


const postUser = async (req, res) => {
  const {email, password} = req.body
  if(!email || !password){
    return res.status(400).send('Faltan datos')
  }

  try {
    const [user, created] = await User.findOrCreate({
      where: {email},
      defaults: {email, password}
    })
    created ? res.status(200).json(user) : res.status(400).json({error: 'email ya registrado'})
    
  } catch (error) {
    res.status(500).json({error: error.message})
  }
  
}

module.exports = postUser