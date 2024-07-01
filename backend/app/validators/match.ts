import vine from '@vinejs/vine'

export const matchValidator = vine.compile(
  vine.object({
    player_winner: vine
      .string()
      .unique(async (db, value) => {
        return await db.from('players').where('id', value).first()
      })
      .optional(),
    player_looser: vine
      .string()
      .unique(async (db, value) => {
        return await db.from('players').where('id', value).first()
      })
      .optional(),
    match_stats: vine
      .string()
      .unique(async (db, value) => {
        return await db.from('match_stats').where('id', value).first()
      })
      .optional(),
    scores: vine
      .array(
        vine.string().unique(async (db, value) => {
          return await db.from('scores').where('id', value).first()
        })
      )
      .optional(),

    terrain_type: vine.enum(['grass', 'hard', 'clay']),
  })
)

export const matchStatsValidator = vine.compile(
  vine.object({
    id: vine.string(),
    stats_1: vine.string().unique(async (db, value) => {
      return await db.from('statistics').where('id', value).first()
    }),
    stats_2: vine.string().unique(async (db, value) => {
      return await db.from('statistics').where('id', value).first()
    }),
  })
)
