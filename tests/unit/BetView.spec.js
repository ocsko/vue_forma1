import { mount } from '@vue/test-utils'
import BetView from '@/views/BetView.vue'

describe('BetView komponens tesztje', () => {
    test('statikus tartalom ellenőrzése', () => {
        const wrapper = mount(BetView)

        expect(wrapper.text()).toContain('Fogadjon!')
    })
})