class TaskModel {

    static insert(id, title, body, status) {
        return `INSERT INTO public.t_task (id, title, body, status) VALUES ('${id}', '${title}', '${body}', ${status});`
    }

    static select(id) {
        const limit = !id? '': `WHERE id=$1`
        return `SELECT * FROM public.t_task ${limit}`
    }

    static remove(id) {
        return [`DELETE FROM public.t_task WHERE id=$1`, [id]]
    }

    static edit(title, body, status, id) {
        return [`UPDATE public.t_task SET title=$1, body=$2, status=$3 WHERE id=$4`,[title, body, status, id]]
    }
}

module.exports = TaskModel