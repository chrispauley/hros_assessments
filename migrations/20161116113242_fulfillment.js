// pid = pid from package table
//
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fulfillment', function(table){
    table.increments('fulfillment_id');
    // table.integer('pid').unsigned();
    // table.integer('ac_id').unsigned();
    // table.integer('ar_id').unsigned();
    // table.integer('at_id').unsigned();
    // table.string('career_level');
    // table.integer('desc_id').unsigned();
    // table.integer('jc_id').unsigned();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fulfillment')
};
