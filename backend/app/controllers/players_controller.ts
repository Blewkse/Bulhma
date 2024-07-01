import type { HttpContext } from '@adonisjs/core/http'
import Player from '#models/player'
import PointHistory from '#models/point_history'
import {
  playerValidator,
  pointHistoryValidator,
  playerStatsLevelsValidator,
  statisticsValidator,
} from '#validators/player'
import StatsLevel from '#models/stats_level'
import Statistic from '#models/statistic'

export default class PlayersController {
  async getPlayers(ctx: HttpContext) {
    return Player.all()
  }

  async getPlayerById(ctx: HttpContext) {
    return Player.findByOrFail('id', ctx.request.params().id)
  }

  async createPlayer(ctx: HttpContext) {
    const schema = await ctx.request.validateUsing(playerValidator)
    return Player.create({
      firstname: schema.firstname,
      lastname: schema.lastname,
      points: schema.points,
      highest_points_amount: schema.highest_points_amount,
      lowest_points_amount: schema.lowest_points_amount,
      userId: schema.userId,
    })
  }

  async updatePlayer(ctx: HttpContext) {
    const player = await Player.findOrFail(ctx.request.params().id)
    const schema = await ctx.request.validateUsing(playerValidator)
    return player
      .merge({
        firstname: schema.firstname,
        lastname: schema.lastname,
        points: schema.points,
        highest_points_amount: schema.highest_points_amount,
        lowest_points_amount: schema.lowest_points_amount,
        userId: schema.userId,
      })
      .save()
  }

  async deletePlayer(ctx: HttpContext) {
    const player = await Player.findOrFail(ctx.request.params().id)
    player.delete()
  }

  async getPlayerHistory(ctx: HttpContext) {
    const playerHistory = await PointHistory.findByOrFail('playerId', ctx.request.params().playerId)
    return playerHistory
  }

  async addAPlayerHistory(ctx: HttpContext) {
    const player = await Player.findOrFail(ctx.request.params().id)
    const schema = await ctx.request.validateUsing(pointHistoryValidator)
    player.related('history').create({ date: schema.date, amount: schema.amount })
  }

  async delAPlayerHistory(ctx: HttpContext) {
    const pointHistory = await PointHistory.findOrFail(ctx.request.params().id)
    return pointHistory.delete()
  }

  async getPlayerStatsLevels(ctx: HttpContext) {
    const playerStatsLevels = await StatsLevel.findByOrFail(
      'playerId',
      ctx.request.params().playerId
    )
    return playerStatsLevels
  }

  async addAPlayerStatsLevels(ctx: HttpContext) {
    const player = await Player.findOrFail(ctx.request.params().id)
    const schema = await ctx.request.validateUsing(playerStatsLevelsValidator)
    player.related('stats_levels').create({
      serve: schema.serve,
      backhand: schema.backhand,
      forehand: schema.forehand,
      smash: schema.smash,
      accurate: schema.accurate,
      available: schema.available,
    })
  }

  async delAPlayerStatsLevels(ctx: HttpContext) {
    const playerStatsLevels = await StatsLevel.findOrFail(ctx.request.params().id)
    return playerStatsLevels.delete()
  }

  async getPlayerStatistics(ctx: HttpContext) {
    const playerStatistics = await Statistic.findByOrFail('playerId', ctx.request.params().playerId)
    return playerStatistics
  }

  async addAPlayerStatistics(ctx: HttpContext) {
    const player = await Player.findOrFail(ctx.request.params().id)
    const schema = await ctx.request.validateUsing(statisticsValidator)
    player.related('statistics').create({
      nb_forehand: schema.nb_forehand,
      nb_backhand: schema.nb_backhand,
      nb_fault: schema.nb_fault,
      nb_smash: schema.nb_smash,
      nb_wins: schema.nb_wins,
      nb_looses: schema.nb_looses,
      nb_ace: schema.nb_ace,
      nb_service_fault: schema.nb_service_fault,
      nb_set_wins: schema.nb_set_wins,
      nb_set_lost: schema.nb_set_lost,
    })
  }

  async delAPlayerStatistics(ctx: HttpContext) {
    const playerStatistics = await Statistic.findOrFail(ctx.request.params().id)
    return playerStatistics.delete()
  }
}
