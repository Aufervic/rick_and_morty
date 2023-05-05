const {User} = require('../DB_connection')

const login = async(req, res) => {
  const{email, password} = req.query

  if(!email || !password){
    return res.status(400).send('Faltan datos')
  }

  try {
    
    const user = await User.findOne({where: {email}})
    
    if(!user) return res.status(404).send('Usuario no encontrado')
    
    if(user.password === password){
      res.status(200).json({access: true})
    }else{
      res.status(200).send('Contraseña incorrecta')
    }
      
  } catch (error) {
    res.status(500).send({error: error.message})
  }
    
}

module.exports = login