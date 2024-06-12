import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Classement from '../../views/ClassementView.vue'

describe('Classement des joueurs', () => {
  it('renders properly', () => {
    const wrapper = mount(Classement, { props: { msg: 'Classement des joueurs' } })
    expect(wrapper.text()).toContain('Classement des joueurs')
  })
})
