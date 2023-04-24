const usuarios = require('./../utils/users')

const login = (req, res) =>{
  const {email, password} = req.query
  for(user of usuarios){
    if(user.email === email && user.password === password){
      res.status(200).json({access: true})
    }else{
      res.status(200).json({access: false})
    }
  }
}

module.exports = {
  login
}