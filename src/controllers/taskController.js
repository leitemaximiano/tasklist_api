const TaskRepository = require('./../repositories/TaskRepository')

async function getAll(request, response) {
    const taskRepository = new TaskRepository()
    const tasks = await taskRepository.getAll()
    return response.status(200).json(tasks)
}

async function getOne(request, response) {
    const { id } = request.params;
    const taskRepository = new TaskRepository()
    const task = await taskRepository.getOne(id)
    return response.status(200).json(task)
}

async function insert(request, response) {
    const { title, body='', status=1 } = request.body
    const taskRepository = new TaskRepository()
    const id = await taskRepository.insert(title, body, status)
    return response.status(201).json({ id })
}

async function remove(request, response) {
    const { id } = request.body
    const taskRepository = new TaskRepository()
    await taskRepository.remove(id)
    return response.status(200).json({ message: 'Tarefa excluída com sucesso!'})
}

async function edit(request, response) {
    const { title, body='', status=1, id } = request.body

    const taskRepository = new TaskRepository()
    await taskRepository.edit(id, title, body, status)
    
    return response.status(200).json({ message: 'tarefa editada com sucesso!'})
}


module.exports = {
    getAll,
    getOne,
    remove,
    edit,
    insert
}