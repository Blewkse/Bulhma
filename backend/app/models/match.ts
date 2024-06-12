import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import Player from './player.js'
import type { HasMany, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import Score from './score.js'
import MatchStat from './match_stat.js'

export default class Match extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @hasOne(() => Player, { foreignKey: 'id' })
  declare player_winner: HasOne<typeof Player>

  @hasOne(() => Player, { foreignKey: 'id' })
  declare player_looser: HasOne<typeof Player>

  @hasOne(() => MatchStat, { foreignKey: 'id' })
  declare match_stats: HasOne<typeof MatchStat>

  @hasMany(() => Score)
  declare scores: HasMany<typeof Score>

  @manyToMany(() => Player, {
    localKey: 'id',
    pivotTable: 'match_players',
    relatedKey: 'id',
    pivotForeignKey: 'match_id',
    pivotRelatedForeignKey: 'player_id',
  })
  declare players: ManyToMany<typeof Player>

  @column()
  declare terrain_type: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
