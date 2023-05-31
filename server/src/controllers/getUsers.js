const {User} = require('../DB_connection')

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


module.exports = getUsers
