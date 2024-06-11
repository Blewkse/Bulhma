import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'matches'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable().primary()
      table.uuid('player_winner_id').unsigned().references('players.id').onDelete('CASCADE')
      table.uuid('player_looser_id').unsigned().references('players.id').onDelete('CASCADE')
      table.string('terrain_type').notNullable()
      table.uuid('match_stats_id').unsigned().references('match_stats.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.raw('DROP TYPE IF EXISTS "terrain_type_status"')
    this.schema.dropTable(this.tableName)
  }
}
