exports.up = function(knex) {
    return knex.schema
    .createTable("projects", tbl => {
        tbl.increments("project_id")
        tbl.text("project_name", 100)
            .notNullable()
        tbl.text("project_description", 200)
        tbl.boolean("project_completed")
            .defaultTo(0)
    })
    .createTable("resources", tbl => {
        tbl.increments("resource_id"),
        tbl.text("resource_name", 100)
            .notNullable()
            .unique()
        tbl.text("resource_description", 200)
    })
    .createTable("tasks", tbl => {
        tbl.increments("task_id")
        tbl.text("task_description", 200)
            .notNullable()
        tbl.text("task_notes", 200)
        tbl.boolean("task_completed")
            .defaultTo(0)
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
    })
    .createTable("project_resources", tbl => {
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
        tbl.integer("task_id")
            .unsigned()
            .notNullable()
            .references("task_id")
            .inTable("tasks")
        tbl.primary(["project_id", "task_id"])
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTablesIfExists("project_resources")
        .dropTablesIfExists("tasks")
        .dropTablesIfExists("resources")
        .dropTablesIfExists("projects")
};
