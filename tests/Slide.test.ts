import { mount } from '@vue/test-utils'
import Slide from '../components/Slide.vue'

const wrapper = mount(Slide, {
  props: { preventOuterClick: false },
})

it(`testing Slide preventOuterClick prop`, () => {
  // @ts-ignore
  expect(wrapper.props().preventOuterClick).toBe(false)
})
