
exports.up = function(knex, Promise) {
  return knex.schema.createTable('catalog', function(table){
    table.increments('cid');
    table.string('name').notNullable().unique();
    table.string('company').notNullable().unique();
    table.integer('noun_id').unsigned();
    table.integer('party_id').unsigned();
    table.integer('pkg_id').unsigned();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('catalog')
};
