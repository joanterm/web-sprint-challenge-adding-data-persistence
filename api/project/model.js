const db = require('../../data/dbConfig')

function getAllProjects() {
    return db('projects')
    .then((items) =>
        items.map((item) => ({
            ...item,
            project_completed: item.project_completed ? true : false
        }))
    ) 
}

function getProjectsById(id) {
    return db('projects')
        .where('project_id', id)
        .first()
        .then((item) => {
           return {
            ...item, 
            project_completed: item.project_completed ? true : false 
        }}     
    )
} 

function addNewProject(project) {
    return db('projects')
        .insert(project)
        .then((id) => {
           return getProjectsById(id[0]) 
        })
}

module.exports = {
    getAllProjects,
    getProjectsById,
    addNewProject
}