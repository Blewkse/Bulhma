import Score from '#models/score'
import Player from '#models/player'

import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ScoreSeeder extends BaseSeeder {
  async run() {
    const player1 = await Player.findByOrFail('lastname', 'Wonka')
    const player2 = await Player.findByOrFail('lastname', 'Le_con')
    const player3 = await Player.findByOrFail('lastname', 'Pol')

    const scoreSet1P1 = await Score.updateOrCreate({ score: 40 }, { score: 40 })
    const scoreSet1P2 = await Score.updateOrCreate({ score: 30 }, { score: 30 })
    const scoreSet1P3 = await Score.updateOrCreate({ score: 15 }, { score: 15 })

    await scoreSet1P1.related('player').save(player1)
    await scoreSet1P2.related('player').save(player2)
    await scoreSet1P3.related('player').save(player3)
  }
}
