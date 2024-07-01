import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class StatsLevel extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

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
