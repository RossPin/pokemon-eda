const pokemonList = require('./pokemonList.json')

let types = pokemonList.reduce((types, pokemon) => {
    types = types.concat(pokemon.types)
    return types
},[])

types = Array.from(new Set(types))

function getTypes(){
    return types
}

function getByType(type) {
    let arr = pokemonList.filter(pokemon => pokemon.types.indexOf(type) > -1)
    return arr[Math.floor(Math.random()*arr.length)].name
}

module.exports = {
    getTypes,
    getByType
}