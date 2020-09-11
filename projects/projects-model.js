const db = require('../data/db-config.js');

module.exports = {
    addResource,
    findResources,
    addProject,
    findProjects,
    addTask,
    findTask
};

function addResource(resourceData){
    return db('resources').insert(resourceData)
    .then(ids =>{
        return resourceData
    })
}
function findResources(){
    return db('resources')
}
function addProject(projectData){
    return db('projects').insert(projectData)
    .then(ids =>{
        return projectData
    })
}
function findProjects(){
    return db("projects")
}
function addTask(taskData){
    return db('tasks').insert(taskData)
    .then(ids =>{
        return taskData
    })
}
function findTask(id){
return db('tasks').join('projects', 'project_id', '=', 'projects.id')
// .join('project.project_name', 'project.project_description').where({id: id})
}