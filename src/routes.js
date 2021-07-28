const { Router } = require('express')

const routes = new Router()

routes.get('/', function(request, response) {
    return response.send('<h1>HELLO WORLD</h1>')
})

module.exports = routes