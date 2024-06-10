import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Player from './player.js'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Score from './score.js'

export default class Match extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Player)
  declare player_id_1: HasOne<typeof Player>

  @hasOne(() => Player)
  declare player_id_2: HasOne<typeof Player>

  @hasOne(() => Player)
  declare player_id_winner: HasOne<typeof Player> | null

  @hasOne(() => Player)
  declare player_id_looser: HasOne<typeof Player> | null

  @hasMany(() => Score)
  declare scores: HasMany<typeof Score>

  @column()
  declare terrain_type: 'clay' | 'hard' | 'grass'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
