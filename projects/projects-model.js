const db = require('../Data/db-config.js');

module.exports = {
    addResource,
    findResources,
    addProject,
    findProject,
    addTask
};

function addResource(resourceData){
    return db('resources').insert(resourceData)
}
function findResources(){
    return db("resources")
}
function addProject(projectData){
    return db('projects').insert(projectData)
}
function findProject(){
    return db("projects")
}
function addTask(taskData){
    return db('tasks').insert(taskData)
}
function findTask(id){
    return db('tasks').where({project_id: id}).join('project.project_name', 'project.project_description').where({id: id})
}



function findIngredientsList(recipeId){
    return db("ingredients_list").where({recipe_id: recipeId})
}

function findInstructions(recipeId){
    return db("steps").where({recipe_id: recipeId})
}