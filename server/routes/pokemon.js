const express = require('express')
const request = require('superagent')

const pokemon = require('../../data/pokemon')

const router = express.Router()

router.get('/types', (req, res) => {
  const types = pokemon.getTypes()
  res.json({types})    
})

router.get('/types/:type', (req, res) => {
  const name = pokemon.getByType(req.params.type)
  request.get('https://pokeapi.co/api/v2/pokemon/'+name)
    .then(pokeRes => {
      res.json(pokeRes.body)
    })
})

module.exports = router
