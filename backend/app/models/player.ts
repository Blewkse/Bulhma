import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Player extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstname: string

  @column()
  declare lastname: string

  @column()
  declare rank: number

  @column()
  declare bestRank: number

  @column()
  declare worstRank: number

  @hasOne(() => User)
  declare creator: HasOne<typeof User>

  @column.date({ autoCreate: true })
  declare createdAt: DateTime

  @column.date({
    autoCreate: true,
    autoUpdate: true,
  })
  declare updatedAt: DateTime
}
