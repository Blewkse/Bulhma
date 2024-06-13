import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Player from './player.js'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'

export default class PointHistory extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare date: Date

  @column()
  declare playerId: string

  @belongsTo(() => Player)
  declare player: BelongsTo<typeof Player>

  @column()
  declare amount: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
