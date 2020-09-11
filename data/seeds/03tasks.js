
exports.seed = function(knex) {
      return knex('tasks').insert([
        {id: 1, project_id: 1, task_description: 'this is task 1', notes: 'this is the note for task 1' } 
      ]);
};
