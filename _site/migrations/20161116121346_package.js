
exports.up = function(knex, Promise) {
  return knex.schema.createTable('package', function(table){
    table.increments('pid');
    table.string('package_id').notNullable().unique();
    table.integer('administration_id').unsigned();
    table.integer('applicability_id').unsigned();
    table.integer('fulfillment_id').unsigned();
    table.string('name');
    table.integer('descriptions_id');      
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('package')
};
