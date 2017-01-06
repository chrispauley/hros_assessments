
exports.up = function(knex, Promise) {
  return knex.schema.createTable('identifier', function(table){
    table.increments('iid');
    table.string('id_name');
    table.string('schemeId');
    table.string('schemeVersionId');
    table.string('schemeAgencyId');
    table.string('description');
    table.string('schemeLink');
    table.string('agencyUri');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('identifier')
};
