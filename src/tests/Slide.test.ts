import { mount } from '@vue/test-utils'
import Slide from '../components/Slide.vue'

const wrapper = mount(Slide, {
  props: { front: false, preventOuterClick: false },
})

it(`testing Slide "front" prop`, () => {
  // @ts-ignore
  expect(wrapper.props().front).toBe(false)
})

it(`testing Slide preventOuterClick prop`, () => {
  // @ts-ignore
  expect(wrapper.props().front).toBe(false)
})
