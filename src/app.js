const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
/* Middleware de tratamento de error */
app.use(routes)
app.use((error, req, res, next) => {
    if (error && error.statusCode) {
        return res.status(error.statusCode).json({
            statusCode: error.statusCode,
            message: error.message
        })
    }
    if(error) {
        return res.json({ message: error.message })
    }
    next()
})

module.exports = app