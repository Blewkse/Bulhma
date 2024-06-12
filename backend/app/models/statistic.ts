import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Player from './player.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Statistic extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

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
  declare nb_service_fault: number

  @column()
  declare nb_set_wins: number

  @column()
  declare nb_set_lost: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}