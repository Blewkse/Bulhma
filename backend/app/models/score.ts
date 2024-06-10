import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Player from './player.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Score extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Player)
  declare player_id: HasOne<typeof Player>

  @column()
  declare score: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
