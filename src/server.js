const server = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 3355

server.listen(PORT, () => 
    process.stdout.write(`start server http://localhost:${PORT}`));