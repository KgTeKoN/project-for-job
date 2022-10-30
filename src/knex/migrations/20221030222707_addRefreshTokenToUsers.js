exports.up = function(knex) {
    return knex.schema.table('users', function(t) {
        t.string('refresh_token');
    });
};

exports.down = function(knex) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('refresh_token');
    });
};
