import Match from '#models/match'
import MatchStat from '#models/match_stat'
import Player from '#models/player'
import Score from '#models/score'
import Statistic from '#models/statistic'
import { matchStatsValidator, matchValidator } from '#validators/match'
import type { HttpContext } from '@adonisjs/core/http'

export default class MatchesController {
  async getMatchs(ctx: HttpContext) {
    return await Match.all()
  }

  async getMatchById(ctx: HttpContext) {
    return await Match.findByOrFail('id', ctx.request.params().id)
  }

  async createMatch(ctx: HttpContext) {
    const schema = await ctx.request.validateUsing(matchValidator)
    const match = await Match.create({ terrain_type: schema.terrain_type })
    let playerWinner
    if (schema.player_winner)
      playerWinner = await Player.findOrFail(ctx.request.body().player_winner_id)
    let playerLooser
    if (schema.player_looser)
      playerLooser = await Player.findOrFail(ctx.request.body().player_looser_id)
    let matchStats
    if (schema.match_stats)
      matchStats = await MatchStat.findOrFail(ctx.request.body().match_stats_id)
    else {
      matchStats = await match.related('match_stats').create({})
      matchStats.related('stats_1').create({})
      matchStats.related('stats_2').create({})
    }
    const scores = []
    for (let i = 0; i < ctx.request.body().scores_id; i++) {
      scores.push(await Score.findOrFail(ctx.request.body().scores_id[i]))
    }

    if (playerWinner) match.related('player_winner').save(playerWinner)
    if (playerLooser) match.related('player_looser').save(playerLooser)
    if (matchStats) match.related('match_stats').save(matchStats)
    if (scores.length > 0) match.related('scores').saveMany(scores)

    return match
  }

  async updateMatch(ctx: HttpContext) {
    const match = await Match.findOrFail(ctx.request.params().id)
    const schema = await ctx.request.validateUsing(matchValidator)
    let playerWinner
    if (schema.player_winner)
      playerWinner = await Player.findOrFail(ctx.request.body().player_winner_id)
    let playerLooser
    if (schema.player_looser)
      playerLooser = await Player.findOrFail(ctx.request.body().player_looser_id)
    const scores = []
    for (let i = 0; i < ctx.request.body().scores_id; i++) {
      scores.push(await Score.findOrFail(ctx.request.body().scores_id[i]))
    }

    match.merge({ terrain_type: schema.terrain_type })
    if (playerWinner) match.related('player_winner').save(playerWinner)
    if (playerLooser) match.related('player_looser').save(playerLooser)
    if (scores.length > 0) match.related('scores').saveMany(scores)

    return match
  }

  async getMatchStatistics(ctx: HttpContext) {
    const match = await Match.findByOrFail('id', ctx.request.params().id)
    const stats1 = await Statistic.findByOrFail('id', match.match_stats.stats_1)
    const stats2 = await Statistic.findByOrFail('id', match.match_stats.stats_2)
    return { stats1, stats2 }
  }

  async deleteMatch(ctx: HttpContext) {
    const match = await Match.findOrFail(ctx.request.params().id)
    match.delete()
  }

  async addPlayersWinnerLooser(ctx: HttpContext) {
    const match = await Match.findOrFail(ctx.request.params().id)
    const playerWinner = await Player.findOrFail(ctx.request.body().player_winner_id)
    const playerLooser = await Player.findOrFail(ctx.request.body().player_looser_id)

    match.related('player_winner').save(playerWinner)
    match.related('player_looser').save(playerLooser)

    return match
  }
}
