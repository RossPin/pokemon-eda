const path = require('path')
const express = require('express')

const pokemonRoutes = require('./routes/pokemon')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/pokemon', pokemonRoutes)

module.exports = server
