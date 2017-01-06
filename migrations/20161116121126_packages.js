
exports.up = function(knex, Promise) {
  return knex.schema.createTable('packages', function(table){
    table.increments();
    table.integer('cid').notNullable();
    table.integer('pid').notNullable(); 
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('packages')
};
