/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const PlayersController = () => import('#controllers/players_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('register', [AuthController, 'register'])
router.post('login', [AuthController, 'login'])

router
  .group(() => {
    router.get('getCurrentUser', [AuthController, 'getCurrentUser'])
    router.post('logout', [AuthController, 'logout'])
  })
  .use(middleware.auth())

router
  .group(() => {
    router.get('players', [PlayersController, 'getPlayers'])
    router.get('players/:id', [PlayersController, 'getPlayerById'])
    router.post('players', [PlayersController, 'createPlayer'])
    router.put('players', [PlayersController, 'updatePlayer'])
    router.delete('players', [PlayersController, 'deletePlayer'])
  })
  .use(middleware.auth())
