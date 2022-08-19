const db = require('../../data/dbConfig')

function getAllTasks() {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.project_id')
        .select(
            'task_id', 
            'task_description',
             'task_notes', 
             'task_completed', 
             'project_name', 
             'project_description'
        )
        .then((items) =>
            items.map(item => ({
                ...item,
                task_completed: item.task_completed ? true : false
            }))
        )
}

function getTasksById(id) {
    return db('tasks')
        .where('task_id', id)
        .first()
        .then((items) => {
           return {
            ...items, 
            task_completed: items.task_completed ? true : false 
        }
    })

} 

function addNewTask(task) {
    return db('tasks')
        .insert(task)   
        .then((id) => {
            return getTasksById(id[0])
        }
)}

module.exports = {
    getAllTasks,
    addNewTask
}
