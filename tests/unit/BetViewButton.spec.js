import { mount } from '@vue/test-utils'
import BetView from '@/views/BetView.vue'

describe('Submit gomb tesztje', () => {
    test('Aktív-e a fogadás gomb', async () => {
        const wrapper = mount(BetView)

        await wrapper.setData(
            {
                futam: 'Imola',
                csapat: 'Mercedes-AMG',
                versenyzo: 'Lewis Hamilton',
                
        })
        expect(wrapper.vm.isDisabled).toBeTruthy()
    })
})