import Player from '#models/player'
import StatsLevel from '#models/stats_level'
import User from '#models/user'
import Statistic from '#models/statistic'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class PlayerSeeder extends BaseSeeder {
  async run() {
    const statLevels1 = await StatsLevel.findByOrFail('serve', 50)
    const statLevels2 = await StatsLevel.findByOrFail('serve', 54)
    const statLevels3 = await StatsLevel.findByOrFail('serve', 60)

    const user1 = await User.findByOrFail('email', 'johdoe@gmail.com')
    const user2 = await User.findByOrFail('email', '123elena@gmail.com')
    const user3 = await User.findByOrFail('email', 'johdoe@gmail.com')

    const statistic1 = await Statistic.findByOrFail('nb_forehand', 54)
    const statistic2 = await Statistic.findByOrFail('nb_forehand', 64)
    const statistic3 = await Statistic.findByOrFail('nb_forehand', 58)

    const player1 = await Player.updateOrCreate(
      { lastname: 'Wonka' },
      {
        firstname: 'Billy',
        lastname: 'Wonka',
        points: 350,
        highest_points_amount: 412,
        lowest_points_amount: 290,
      }
    )

    const player2 = await Player.updateOrCreate(
      { lastname: 'Le_con' },
      {
        firstname: 'Selmene',
        lastname: 'Le_con',
        points: 4543,
        highest_points_amount: 4860,
        lowest_points_amount: 2576,
      }
    )
    const player3 = await Player.updateOrCreate(
      { lastname: 'Pol' },
      {
        firstname: 'Jimmy',
        lastname: 'Pol',
        points: 2452,
        highest_points_amount: 3200,
        lowest_points_amount: 2450,
      }
    )

    await player1.related('user').associate(user1)
    await player1.related('stats_levels').save(statLevels1)
    await player1.related('statistics').save(statistic1)

    await player2.related('user').associate(user2)
    await player2.related('stats_levels').save(statLevels2)
    await player2.related('statistics').save(statistic2)

    await player3.related('user').associate(user3)
    await player3.related('stats_levels').save(statLevels3)
    await player3.related('statistics').save(statistic3)

    await player1.related('history').createMany([
      {
        date: new Date(),
        amount: 372,
      },
      {
        date: new Date(),
        amount: 402,
      },
    ])

    await player2.related('history').createMany([
      {
        date: new Date(),
        amount: 4343,
      },
      {
        date: new Date(),
        amount: 4500,
      },
    ])

    await player3.related('history').createMany([
      {
        date: new Date(),
        amount: 2652,
      },
      {
        date: new Date(),
        amount: 2700,
      },
    ])
  }
}
