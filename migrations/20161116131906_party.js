
exports.up = function(knex, Promise) {
  return knex.schema.createTable('party', function(table){
    table.increments('party_id');
    table.integer('party_type_tid').unsigned();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('party')
};
