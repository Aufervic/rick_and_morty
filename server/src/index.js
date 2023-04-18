const http = require('http')
const data = require('./utils/data')

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const {url} = req
  
  if(url.includes('/rickandmorty/character')){
    let id = url.split('/')[3]
    let character = data.find((c) => c.id === id)

    if(character){
      res.writeHead(200, {'Content-Type': 'application/json'})
      return res.end(JSON.stringify(character))

    }else{
      res.writeHead(404, {'Content-Type': 'application/json'})
      return res.end(JSON.stringify({error: 'Character not found'}))
    }
    
  }

  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hola que hace')
})
.listen(3001, 'localhost')