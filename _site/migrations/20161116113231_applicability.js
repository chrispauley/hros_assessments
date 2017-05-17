// pid = pid from package table
// ac_id = id from assessed_competencies
// ar_id = id from applicabile_regions
// at_id = id from assessment_types
// career_level = must exist in ./common../career_levels
// desc_id = from descriptions
// jc_id from job_categories
//
exports.up = function(knex, Promise) {
  return knex.schema.createTable('applicability', function(table){
    table.increments('applicability_id');
    table.integer('pid').unsigned();
    table.integer('ac_id').unsigned();
    table.integer('ar_id').unsigned();
    table.integer('at_id').unsigned();
    table.string('career_level');
    table.integer('desc_id').unsigned();
    table.integer('jc_id').unsigned();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('applicability')
};
