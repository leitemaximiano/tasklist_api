
function getAll(request, response) {
    return response.status(200).json({ message: 'getall'})
}

function getOne(request, response) {
    const { id } = request.params;
    return response.status(200).json({ id, message: 'getOne'})
}

function remove(request, response) {
    return response.status(200).json({ message: 'remove'})
}

function edit(request, response) {
    return response.status(200).json({ message: 'edit'})
}


module.exports = {
    getAll,
    getOne,
    remove,
    edit
}