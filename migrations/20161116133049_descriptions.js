
exports.up = function(knex, Promise) {
  return knex.schema.createTable('descriptions', function(table){
    table.increments('descriptions_id');
    table.integer('description_id').notNullable();
    table.string('descriptions_name');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('descriptions')
};
