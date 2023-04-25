const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', ()=>{
})

describe('GET /rickandmorty/character/:id', ()=>{
  it('Responde con status: 200', async ()=>{
    await agent.get('/rickandmorty/character/1').expect(200);
  })

  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
    const {body} = await agent.get('/rickandmorty/character/1')
    
    expect(body).toHaveProperty('id')
    expect(body).toHaveProperty('name')
    expect(body).toHaveProperty('species')
    expect(body).toHaveProperty('gender')
    expect(body).toHaveProperty('status')
    expect(body).toHaveProperty('origin')
    expect(body).toHaveProperty('image')
  })


  it('Si hay un error responde con status: 500', async ()=>{
    // alingresar un id que no existe
    // cualquiera de las dos formas funciona
    // await agent.get('/rickandmorty/character/900').expect(500);
     
    const response = await agent.get('/rickandmorty/character/a');
    expect(response.statusCode).toEqual(500)
  })

})


describe('GET /rickandmorty/login', ()=>{

  it('Debe dar acceso cuando email y password son correctos', async ()=>{
    // http://localhost:3001/rickandmorty/login?email=aufer@email.com&password=123456
    const response = await agent.get('/rickandmorty/login?email=aufer@email.com&password=123456');
    expect(response.body).toEqual({access: true})
  })

  it('Debe negar el acceso cuando email y password son incorrectos', async ()=>{
    // http://localhost:3001/rickandmorty/login?email=aufer@email.com&password=123456
    const response = await agent.get('/rickandmorty/login?email=auferr@email.com&password=1234566');
    expect(response.body).toEqual({access: false})
  })

})

const character1 = {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}


const character2 = {
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
  "origin": {
    "name": "unknown",
    "url": ""
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
}

// 06
describe('POST /rickandmorty/fav', ()=>{

  it('Debe devolver los personajes favoritos más el último que se envía', async ()=>{
    
    const response = await agent.post('/rickandmorty/fav').send(character1)
    expect(response.body).toEqual([character1])

    const response2 = await agent.post('/rickandmorty/fav').send(character2)
    expect(response2.body).toEqual([character1, character2])
  })
})



// 07
describe('DELETE /rickandmorty/fav/:id', ()=>{

  it('Debe devolver el mismo array cuando se le pasa un id que no existe', async ()=>{
    
    const response = await agent.delete('/rickandmorty/fav/900')
    expect(response.body).toEqual([character1, character2])
  })


  it('Debe eliminar el personaje de uacuerdo al Id enviado por url', async ()=>{
    
    const response = await agent.delete('/rickandmorty/fav/1')
    expect(response.body).toEqual([character2])
  })
})