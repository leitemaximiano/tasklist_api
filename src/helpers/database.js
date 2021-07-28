const { Pool } = require('pg')
require('dotenv').config()

const {
    USER_DB,
    PASSWORD_DB,
    NAME_DB,
    PORT_DB,
    HOST_DB
} = process.env

async function connection() {
    const settings_database = {
        user: USER_DB,
        password:PASSWORD_DB,
        database: NAME_DB,
        host: HOST_DB,
        port: PORT_DB
    }
    const pool = new Pool(settings_database)
    return pool
}

module.exports = {
    connection
}