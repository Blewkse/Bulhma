import vine from '@vinejs/vine'

export const playerValidator = vine.compile(
  vine.object({
    firstname: vine.string().trim(),
    lastname: vine.string().trim(),
    points: vine.number(),
    highest_points_amount: vine.number().optional(),
    lowest_points_amount: vine.number().optional(),
    userId: vine.string().unique(async (db, value) => {
      return await db.from('users').where('id', value).first()
    }),
  })
)

export const pointHistoryValidator = vine.compile(
  vine.object({
    date: vine.date().before('today'),
    amount: vine.number(),
  })
)

export const playerStatsLevelsValidator = vine.compile(
  vine.object({
    serve: vine.number(),
    backhand: vine.number(),
    forehand: vine.number(),
    smash: vine.number(),
    accurate: vine.number(),
    available: vine.number(),
  })
)

export const statisticsValidator = vine.compile(
  vine.object({
    nb_forehand: vine.number(),
    nb_backhand: vine.number(),
    nb_fault: vine.number(),
    nb_smash: vine.number(),
    nb_wins: vine.number(),
    nb_looses: vine.number(),
    nb_ace: vine.number(),
    nb_service_fault: vine.number(),
    nb_set_wins: vine.number(),
    nb_set_lost: vine.number(),
  })
)
