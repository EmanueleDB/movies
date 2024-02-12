<template>
  <div>
    <Teleport to="body">
      <div
        :class="[
          'fixed bottom-0 left-0 right-0 top-0 z-10',
          { active: active },
        ]"
      >
        <div
          class="pointer-events-none absolute left-0 top-0 z-20 h-svh w-full overflow-y-auto overflow-x-hidden"
        >
          <div
            ref="slideContainer"
            :class="[
              'absolute top-0 max-h-svh min-h-svh w-full max-w-full overflow-y-auto overflow-x-hidden transition-all duration-700 sm:w-[576px] md:w-[1140px]',
              [
                active
                  ? 'opacity-1 visible right-0 mt-0 translate-x-0 transform delay-200'
                  : 'invisible mt-[100svh] translate-x-full transform opacity-0',
              ],
            ]"
          >
            <div
              class="pointer-events-auto relative bg-white p-2 shadow-md dark:bg-gray-600"
              style="height: inherit; min-height: inherit"
            >
              <Icon
                class="sticky left-full top-2 z-20 mb-6 backdrop-blur-md dark:text-white"
                name="clarity:times-circle-line"
                size="30"
                @click="closeSlide"
              />

              <slot></slot>
            </div>
          </div>
        </div>

        <div
          :class="[
            'fixed bottom-0 left-0 right-0 top-0 z-10 h-svh bg-gray-500 bg-opacity-50 transition-all duration-500',
            [active ? 'opacity-1 visible' : 'invisible opacity-0 delay-200'],
          ]"
        ></div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

type Props = {
  preventOuterClick?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  preventOuterClick: false,
})
const emit = defineEmits(['close', 'toggleSlideSize'])

const active = ref(false)
onMounted(() => {
  setTimeout(() => {
    active.value = true
  }, 100)
})

const slideContainer = ref(null)
onClickOutside(slideContainer, () => {
  if (!props.preventOuterClick) closeSlide()
})

const closeSlide = () => {
  if (!active.value) return
  active.value = false
  emit('close')
}
</script>
