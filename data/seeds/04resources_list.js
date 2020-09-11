
exports.seed = function(knex) {
      return knex('resource_list').insert([
        {id:1, project_id:1, resource_id: 1, quantity: 10}
      ]);
};
