import Match from '#models/match'
import Player from '#models/player'
import Score from '#models/score'
import Statistic from '#models/statistic'
import MatchStat from '#models/match_stat'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class MatchSeeder extends BaseSeeder {
  async run() {
    const player1 = await Player.findByOrFail('lastname', 'Wonka')
    const player2 = await Player.findByOrFail('lastname', 'Le_con')
    const player3 = await Player.findByOrFail('lastname', 'Pol')

    const score1 = await Score.findByOrFail('score', 40)
    const score2 = await Score.findByOrFail('score', 30)
    const score3 = await Score.findByOrFail('score', 15)

    const stat1 = await Statistic.findByOrFail('nb_forehand', 54)
    const stat2 = await Statistic.findByOrFail('nb_forehand', 64)
    const stat3 = await Statistic.findByOrFail('nb_forehand', 58)

    const matchGrass = await Match.updateOrCreate(
      { terrain_type: 'grass' },
      {
        terrain_type: 'grass',
      }
    )
    const matchHard = await Match.updateOrCreate(
      { terrain_type: 'hard' },
      {
        terrain_type: 'hard',
      }
    )
    const matchClay = await Match.updateOrCreate(
      { terrain_type: 'clay' },
      {
        terrain_type: 'clay',
      }
    )

    const matchStat1 = await MatchStat.updateOrCreate({}, {})
    const matchStat2 = await MatchStat.updateOrCreate({}, {})
    const matchStat3 = await MatchStat.updateOrCreate({}, {})

    await matchStat1.related('stats_1').save(stat1)
    await matchStat1.related('stats_2').save(stat2)
    await matchStat2.related('stats_1').save(stat3)
    await matchStat2.related('stats_2').save(stat1)
    await matchStat3.related('stats_1').save(stat2)
    await matchStat3.related('stats_2').save(stat3)

    await matchClay.related('player_winner').save(player1)
    await matchClay.related('player_looser').save(player2)

    await matchGrass.related('player_winner').save(player2)
    await matchGrass.related('player_looser').save(player3)

    await matchHard.related('player_winner').save(player3)
    await matchHard.related('player_looser').save(player1)

    await matchClay.related('match_stats').save(matchStat1)
    await matchHard.related('match_stats').save(matchStat2)
    await matchGrass.related('match_stats').save(matchStat3)

    await matchClay.related('scores').saveMany([score1, score2])
    await matchGrass.related('scores').saveMany([score2, score3])
    await matchHard.related('scores').saveMany([score3, score1])
  }
}
