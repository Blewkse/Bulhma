import Statistic from '#models/statistic'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class StatisticSeeder extends BaseSeeder {
  async run() {
    await Statistic.updateOrCreateMany(
      ['nb_forehand'],
      [
        {
          nb_forehand: 54,
          nb_backhand: 24,
          nb_fault: 14,
          nb_smash: 12,
          nb_wins: 6,
          nb_looses: 4,
          nb_ace: 8,
          nb_service_fault: 5,
          nb_set_wins: 21,
          nb_set_lost: 16,
        },
        {
          nb_forehand: 64,
          nb_backhand: 26,
          nb_fault: 19,
          nb_smash: 8,
          nb_wins: 9,
          nb_looses: 2,
          nb_ace: 13,
          nb_service_fault: 6,
          nb_set_wins: 35,
          nb_set_lost: 10,
        },
        {
          nb_forehand: 58,
          nb_backhand: 36,
          nb_fault: 29,
          nb_smash: 2,
          nb_wins: 1,
          nb_looses: 7,
          nb_ace: 3,
          nb_service_fault: 8,
          nb_set_wins: 8,
          nb_set_lost: 30,
        },
      ]
    )
  }
}
