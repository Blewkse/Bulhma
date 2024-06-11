import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Player from './player.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class PointHistory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.date({ serialize: (value) => value.toFormat('LLL yyyy') })
  declare date: DateTime

  @column()
  declare amount: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
