
exports.up = function(knex, Promise) {
  return knex.schema.createTable('string_arrays', function(table){
    table.increments('sa_id');
    table.string('name');
    table.string('value');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('string_arrays')
};
