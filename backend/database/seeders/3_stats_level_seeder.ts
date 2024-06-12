import StatsLevel from '#models/stats_level'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class StatsLevelSeeder extends BaseSeeder {
  async run() {
    StatsLevel.updateOrCreateMany(
      ['serve'],
      [
        {
          serve: 50,
          backhand: 50,
          forehand: 50,
          smash: 50,
          accurate: 50,
          available: 10,
        },
        {
          serve: 54,
          backhand: 56,
          forehand: 50,
          smash: 50,
          accurate: 50,
          available: 0,
        },
        {
          serve: 60,
          backhand: 59,
          forehand: 50,
          smash: 50,
          accurate: 62,
          available: 0,
        },
      ]
    )
  }
}
