import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Player from './player.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class StatsLevel extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Player)
  declare player_id: HasOne<typeof Player>

  @column()
  declare serve: number

  @column()
  declare backhand: number

  @column()
  declare forehand: number

  @column()
  declare smash: number

  @column()
  declare accurate: number

  @column()
  declare available: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
