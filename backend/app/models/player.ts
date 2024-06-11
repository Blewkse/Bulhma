import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { HasMany, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import StatsLevel from './stats_level.js'
import PointHistory from './point_history.js'
import Statistic from './statistic.js'
import Match from './match.js'

export default class Player extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstname: string

  @column()
  declare lastname: string

  @column()
  declare points: number

  @column()
  declare highest_points_amount: number

  @column()
  declare lowest_points_amount: number

  @hasOne(() => User)
  declare creator: HasOne<typeof User>

  @hasOne(() => StatsLevel)
  declare stats_levels: HasOne<typeof StatsLevel>

  @hasOne(() => Statistic)
  declare statistics: HasOne<typeof Statistic>

  @hasMany(() => PointHistory)
  declare player: HasMany<typeof PointHistory>

  @manyToMany(() => Match)
  declare matchs: ManyToMany<typeof Match>

  @column.date({ autoCreate: true })
  declare createdAt: DateTime

  @column.date({
    autoCreate: true,
    autoUpdate: true,
  })
  declare updatedAt: DateTime
}
