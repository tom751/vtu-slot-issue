import { describe, it, expect, beforeAll } from 'vitest'

import { config, shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  beforeAll(() => {
    config.global.renderStubDefaultSlot = true
  })

  it('renders properly', () => {
    const wrapper = shallowMount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
