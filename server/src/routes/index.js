const express = require('express');
const router = express.Router();

const {getCharById} = require('../controllers/getCharById')
const deleteFav = require('../controllers/deleteFav')
const login = require('../controllers/login')
const postUser = require('../controllers/postUser')
const getUsers = require('../controllers/getUsers')
const postFav = require('../controllers/postFav')
const getFavs = require('../controllers/getFavs')


router.get('/character/:id', (req, res) => {
  getCharById(req, res)
})


// http://localhost:3001/rickandmorty/login?email=aufer@email.com&password=123456
router.get('/login', login)

router.post('/user', postUser)

router.get('/users', getUsers)

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav)

router.get('/fav', getFavs)


module.exports = router