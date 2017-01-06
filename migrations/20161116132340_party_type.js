
exports.up = function(knex, Promise) {
  return knex.schema.createTable('party_type', function(table){
    table.increments('party_type_tid');
    table.integer('iid').unsigned();
    table.string('name');
    table.string('code');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('party_type')
};
