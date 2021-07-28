const TaskModel = require('./../models/taskModel')
const database = require('./../helpers/database')
const {v4: uuid} = require('uuid')


class TaskRepository {

    async insert(title, body='', status=1) {
        if (!Object.prototype.toString.call(title).includes('String')) {
            throw new Error('É necessário ser um valor string')
        }
        
        const id = uuid()
        const pg = await database.connection()
        await pg.query(TaskModel.insert(id, title, body, status))
        
        return id
    }
    
    async getOne(id) {
        if (!id) {
            throw new Error('É necessário adicionar um id')
        }

        const pg = await database.connection()
        const registry = await pg.query(TaskModel.select(id), [id])
        if(!registry) {
            throw new Error('Não localizamos nenhum registro com esse id')
        }

        return registry.rows[0]
    }

    async getAll() {
        const pg = await database.connection()
        const registries = await pg.query(TaskModel.select())

        return registries.rows
    }

    async edit(id, title='', body='', status=1) {
        if (!id) {
            throw new Error('É necessário adicionar um id')
        }
        const pg = await database.connection()
        await pg.query(...TaskModel.edit(title, body, status, id))
    }

    async remove(id) {
        if (!id) {
            throw new Error('É necessário adicionar um id')
        }
        const pg = await database.connection()
        await pg.query(...TaskModel.remove(id))
    }
}

module.exports = TaskRepository