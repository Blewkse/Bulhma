import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

import { registerValidator, loginValidator } from '#validators/user'

export default class AuthController {
  async register(ctx: HttpContext) {
    const schema = await ctx.request.validateUsing(registerValidator)
    const user = await User.create(schema)
    await ctx.auth.use('web').login(user)
    return user
  }

  async login(ctx: HttpContext) {
    const schema = await ctx.request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(schema.email, schema.password)

    await ctx.auth.use('web').login(user)
    ctx.response.redirect('/home')
  }

  async getCurrentUser(ctx: HttpContext) {
    return ctx.auth.getUserOrFail()
  }

  async logout(ctx: HttpContext) {
    await ctx.auth.use('web').logout()
    return ctx.response.redirect('/login')
  }
}
