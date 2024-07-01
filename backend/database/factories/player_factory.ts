import factory from '@adonisjs/lucid/factories'
import Player from '#models/player'

import { UserFactory } from './user_factory.js'
import { StatisticFactory } from './statistic_factory.js'
import StatsLevel from '#models/stats_level'
import PointHistory from '#models/point_history'

export const StatsLevelsFactory = factory
  .define(StatsLevel, async ({ faker }) => {
    return {
      serve: faker.number.int(),
      backhand: faker.number.int(),
      forehand: faker.number.int(),
      smash: faker.number.int(),
      accurate: faker.number.int(),
      available: faker.number.int(),
    }
  })
  .build()

export const PointHistoryFactory = factory
  .define(PointHistory, async ({ faker }) => {
    return {
      date: faker.date.recent(),
      amount: faker.number.int(),
    }
  })
  .build()

export const PlayerFactory = factory
  .define(Player, async ({ faker }) => {
    return {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      points: faker.number.int(),
      highest_points_amount: faker.number.int(),
      lowest_points_amount: faker.number.int(),
    }
  })
  .relation('user', () => UserFactory)
  .relation('stats_levels', () => StatsLevelsFactory)
  .relation('statistics', () => StatisticFactory)
  .relation('history', () => PointHistoryFactory)
  .build()
