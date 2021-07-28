const { Router } = require('express')
const { taskController } = require('./controllers')

const routes = new Router()

function resolver (handlerFn) {
    return (req, res, next) => {
      return Promise.resolve(handlerFn(req, res, next))
        .catch(e => next(e))
    }
}

// Router Task
routes.get('/tasks', resolver(taskController.getAll))
routes.get('/tasks/:id', resolver(taskController.getOne))
routes.post('/tasks', resolver(taskController.insert))
routes.patch('/tasks', resolver(taskController.edit))
routes.delete('/tasks', resolver(taskController.remove))

module.exports = routes