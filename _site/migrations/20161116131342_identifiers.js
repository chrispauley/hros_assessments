

exports.up = function(knex, Promise) {
  return knex.schema.createTable('identifiers', function(table){
    table.increments('aid');
    table.integer('iid').notNullable();
    table.string('identifiers_name');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('identifiers')
};
