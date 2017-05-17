
exports.up = function(knex, Promise) {
  return knex.schema.createTable('description', function(table){
    table.increments('description_id');
    table.string('desc_text');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('description')
};
