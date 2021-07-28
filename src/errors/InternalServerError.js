class InternalServerError extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'InternalServerError'
        this.statusCode = 500
    }
}

module.exports = InternalServerError