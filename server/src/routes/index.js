const express = require('express');
const router = express.Router();

const {getCharById} = require('../controllers/getCharById')
const deleteFav = require('../controllers/deleteFav')
const login = require('../controllers/login')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')


router.get('/character/:id', (req, res) => {
  getCharById(req, res)
})


// http://localhost:3001/rickandmorty/login?email=aufer@email.com&password=123456
router.get('/login', login)

router.post('/login', postUser)

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav)


module.exports = router