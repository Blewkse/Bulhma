import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stats_levels'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable().primary()
      table.integer('serve').defaultTo('50')
      table.integer('backhand').defaultTo('50')
      table.integer('forehand').defaultTo('50')
      table.integer('smash').defaultTo('50')
      table.integer('accurate').defaultTo('50')
      table.integer('available').defaultTo('10')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
