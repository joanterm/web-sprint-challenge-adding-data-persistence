const db = require('../../data/dbConfig')

function getAllResources() {
    return db("resources")
}

function getResourceById(id) {
    return db("resources")
        .where("resource_id", id)
        .first()

}
function postNewResource(resource) {
    return db("resources")
        .insert(resource)
        .then((id) => {
            return getResourceById(id[0])
        })
}


module.exports = {
    getAllResources,
    postNewResource,
    getResourceById
}