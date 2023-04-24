const http = require('http')
const {getCharById} = require('./controllers/getCharById')


http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const {url} = req
  
  if(url.includes('/rickandmorty/character')){
	//let pos = url.lastIndexOf('/')
	//let id = url.split('/').at(-1)
    let id = url.split('/')[3]

    getCharById(res, id)

    return;
  }

  res.writeHead(400, {'Content-Type': 'text/plain'})
  res.end('Hola que hace')
})
.listen(3001, 'localhost')