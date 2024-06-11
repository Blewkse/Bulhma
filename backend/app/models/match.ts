import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import Player from './player.js'
import type { HasMany, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import Score from './score.js'
import MatchStat from './match_stat.js'

export default class Match extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Player)
  declare player_id_winner: HasOne<typeof Player> | null

  @hasOne(() => Player)
  declare player_id_looser: HasOne<typeof Player> | null

  @hasOne(() => MatchStat)
  declare match_stats: HasOne<typeof MatchStat>

  @hasMany(() => Score)
  declare scores: HasMany<typeof Score>

  @manyToMany(() => Player)
  declare players: ManyToMany<typeof Player>

  @column()
  declare terrain_type: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
