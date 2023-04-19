const http = require('http')
const data = require('./utils/data')
 const {getCharById} = require('./controllers/getCharById')


http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const {url} = req
  
  if(url.includes('/rickandmorty/character')){
    let id = url.split('/')[3]

    getCharById(res, id)

    return;
  }

  res.writeHead(400, {'Content-Type': 'text/plain'})
  res.end('Hola que hace')
})
.listen(3001, 'localhost')