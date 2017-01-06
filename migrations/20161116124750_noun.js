exports.up = function(knex, Promise) {
  return knex.schema.createTable('noun', function(table){
    table.increments('noun_id');
    table.integer('doc_id').unsigned();
    table.integer('altd_id').unsigned();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('noun')
};
