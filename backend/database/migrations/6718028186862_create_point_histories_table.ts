import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'point_histories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').defaultTo(this.raw('uuid_generate_v4()')).notNullable().primary()
      table.uuid('player_id').references('players.id').onDelete('CASCADE')
      table.dateTime('date').notNullable()
      table.integer('amount').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
