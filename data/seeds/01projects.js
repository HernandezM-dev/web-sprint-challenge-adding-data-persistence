
exports.seed = function(knex) {
      return knex('projects').insert([
        {id: 1, project_name: 'project1', project_description: "this is project 1", completed: false},
        {id: 2, project_name: 'project2', completed: true},
        {id: 3, project_name: 'project3', project_description: 'this is project 2'}
      ]);
};
