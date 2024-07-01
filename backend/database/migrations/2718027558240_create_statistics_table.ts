import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'statistics'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').defaultTo(this.raw('uuid_generate_v4()')).notNullable().primary()
      table.integer('nb_forehand').defaultTo(0)
      table.integer('nb_backhand').defaultTo(0)
      table.integer('nb_fault').defaultTo(0)
      table.integer('nb_smash').defaultTo(0)
      table.integer('nb_wins').defaultTo(0)
      table.integer('nb_looses').defaultTo(0)
      table.integer('nb_ace').defaultTo(0)
      table.integer('nb_service_fault').defaultTo(0)
      table.integer('nb_set_wins').defaultTo(0)
      table.integer('nb_set_lost').defaultTo(0)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
