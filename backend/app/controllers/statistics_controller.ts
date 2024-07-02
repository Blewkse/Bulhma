// import type { HttpContext } from '@adonisjs/core/http'

import Statistic from '#models/statistic'
import { HttpContext } from '@adonisjs/core/http'

export default class StatisticsController {
  async getStatistic(ctx: HttpContext) {
    return await Statistic.findByOrFail('id', ctx.request.params().id)
  }

  async updateStatistics(ctx: HttpContext) {
    const stat = await Statistic.findByOrFail('id', ctx.request.params().id)
    await stat.merge(ctx.request.body()).save()
    return stat
  }
}
