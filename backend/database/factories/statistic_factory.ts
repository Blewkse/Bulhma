import factory from '@adonisjs/lucid/factories'
import Statistic from '#models/statistic'

export const StatisticFactory = factory
  .define(Statistic, async ({ faker }) => {
    return {
      nb_forehand: faker.number.int(),
      nb_backhand: faker.number.int(),
      nb_fault: faker.number.int(),
      nb_smash: faker.number.int(),
      nb_wins: faker.number.int(),
      nb_looses: faker.number.int(),
      nb_service_fault: faker.number.int(),
      nb_set_wins: faker.number.int(),
      nb_set_lost: faker.number.int(),
    }
  })
  .build()
