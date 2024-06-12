import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'scores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').defaultTo(this.raw('uuid_generate_v4()')).notNullable().primary()
      table.uuid('player_id').unsigned().references('players.id').onDelete('CASCADE')
      table.uuid('match_id').unsigned().references('matches.id').onDelete('CASCADE')
      table.string('score').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
