import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'statistics'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable().primary()
      table.integer('nb_forehand')
      table.integer('nb_backhand')
      table.integer('nb_fault')
      table.integer('nb_smash')
      table.integer('nb_wins')
      table.integer('nb_looses')
      table.integer('nb_ace')
      table.integer('nb_serviceFault')
      table.integer('nb_setWins')
      table.integer('nb_setLost')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
