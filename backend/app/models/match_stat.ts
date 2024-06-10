import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Match from './match.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Statistic from './statistic.js'

export default class MatchStat extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Match)
  declare match_id: HasOne<typeof Match>

  @hasOne(() => Statistic)
  declare stats_id_1: HasOne<typeof Statistic>

  @hasOne(() => Statistic)
  declare stats_id_2: HasOne<typeof Statistic>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
