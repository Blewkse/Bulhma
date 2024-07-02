import { test } from '@japa/runner'

import { UserFactory } from '#database/factories/user_factory'

test.group('Users', () => {
  test('get /users', async ({ client }) => {
    const response = await client.get('/users')
    response.assertBody({})
  })

  test('post /register', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.post('/register').form(user)
    response.assertBody({})
  })
})
