
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl=>{
        tbl.increments();
        tbl.text('project_name',128).notNullable()
        tbl.text('project_description', 300)
        tbl.boolean('completed', false)
    })
    .createTable('resources', tbl =>{
        tbl.increments();
        tbl.text('resource_name', 128).notNullable()
        tbl.text('resource_description', 300)
    })
    .createTable('resource_list', tbl=>{
        tbl.increments();
        tbl.integer('project_id').unsigned().notNullable().refrences('id').inTable('projects').onUpdate('RESTRICT').onDelete('RESTRICT')
        tbl.integer('resource_id').unsigned().notNullable().refrences('id').inTable('resources').onUpdate('RESTRICT').onDelete('RESTRICT')
        tbl.integer('quantity').notNullable()
    })
    .createTable('tasks', tbl=>{
        tbl.increments()
        tbl.integer('project_id').unsigned().notNullable().refrences('id').inTable('projects').onUpdate('RESTRICT').onDelete('RESTRICT')
        tbl.text('task_description', 300).notNullable()
        tbl.text('notes', 1000)
    })
};

exports.down = function(knex) {
  
};
