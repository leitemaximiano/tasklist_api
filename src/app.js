const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
/* Middleware de tratamento de error */
app.use((error, req, res, next) => {
    if (error && error.statusCode) {
        res.status(error.statusCode).json({
            statusCode: error.statusCode,
            message: error.message
        })
    } else {
        console.log(error);
    }
    next()
})
app.use(routes)

module.exports = app