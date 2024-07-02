import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await User.updateOrCreateMany(
      ['email'],
      [
        {
          full_name: 'John Doe',
          email: 'johdoe@gmail.com',
          password: 'superpassword2',
        },
        {
          full_name: 'Elena gaterie',
          email: '123elena@gmail.com',
          password: 'bigoubigou',
        },
        {
          full_name: 'Jean Patrick',
          email: 'jp@gmail.com',
          password: 'bulma22',
        },
        {
          full_name: 'Brice Matias',
          email: 'bbmm@gmail.com',
          password: 'kkREP',
        },
      ]
    )
  }
}
