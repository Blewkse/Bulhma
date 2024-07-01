import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'players'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').defaultTo(this.raw('uuid_generate_v4()')).notNullable().primary()
      table.string('firstname').notNullable()
      table.string('lastname').notNullable()
      table.integer('points').notNullable()
      table.integer('highest_points_amount').nullable()
      table.integer('lowest_points_amount').nullable()
      table.uuid('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.uuid('stats_levels_id').unsigned().references('stats_levels.id').onDelete('CASCADE')
      table.uuid('statistics_id').unsigned().references('statistics.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}