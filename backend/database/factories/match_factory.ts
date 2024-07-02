import factory from '@adonisjs/lucid/factories'
import Match from '#models/match'
import { PlayerFactory } from './player_factory.js'
import MatchStat from '#models/match_stat'
import { StatisticFactory } from './statistic_factory.js'
import Score from '#models/score'

enum TerrainType {
  Grass = 'grass',
  Hard = 'hard',
  Clay = 'clay',
}

export const ScoreFactory = factory
  .define(Score, async ({ faker }) => {
    return { score: faker.number.int() }
  })
  .relation('player', () => PlayerFactory)
  .build()

export const MatchStatFactory = factory
  .define(MatchStat, async ({ faker }) => {
    return {}
  })
  .relation('stats_1', () => StatisticFactory)
  .relation('stats_2', () => StatisticFactory)
  .build()

export const MatchFactory = factory
  .define(Match, async ({ faker }) => {
    return {
      terrain_type: faker.helpers.enumValue(TerrainType),
    }
  })
  .relation('player_winner', () => PlayerFactory)
  .relation('player_looser', () => PlayerFactory)
  .relation('match_stats', () => MatchStatFactory)
  .relation('scores', () => ScoreFactory)
  .build()
