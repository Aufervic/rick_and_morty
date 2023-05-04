require('dotenv').config()
const {conn} = require('./DB_connection')
const server = require('./app')

const PORT = process.env.PORT || 3001

conn.sync({alter: true})
.then(()=>{

  server.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`)
  })
})

