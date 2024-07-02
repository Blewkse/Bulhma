import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Statistic from './statistic.js'

export default class MatchStat extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @hasOne(() => Statistic, { foreignKey: 'id' })
  declare stats_1: HasOne<typeof Statistic>

  @hasOne(() => Statistic, { foreignKey: 'id' })
  declare stats_2: HasOne<typeof Statistic>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
