
exports.seed = function(knex) {
      return knex('resources').insert([
        {id:1, resource_name: 'computer', resource_description: 'macOS and windows'}
      ]);
};
