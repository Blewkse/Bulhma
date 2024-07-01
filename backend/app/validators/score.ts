import vine from '@vinejs/vine'

export const ScoreValidator = vine.compile(
  vine.object({
    id: vine.string(),
    player: vine.string().unique(async (db, value) => {
      return await db.from('players').where('id', value).first()
    }),
    match: vine.string().unique(async (db, value) => {
      return await db.from('matchs').where('id', value).first()
    }),
    score: vine.number(),
  })
)
