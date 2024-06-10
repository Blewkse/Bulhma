import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Player from './player.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Statistic extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Player)
  declare player_id: HasOne<typeof Player>

  @column()
  declare nb_forehand: number

  @column()
  declare nb_backhand: number

  @column()
  declare nb_fault: number

  @column()
  declare nb_smash: number

  @column()
  declare nb_wins: number

  @column()
  declare nb_looses: number

  @column()
  declare nb_ace: number

  @column()
  declare nb_serviceFault: number

  @column()
  declare nb_pointsMarked: number

  @column()
  declare nb_pointsTaked: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
