<template>
  <div
    class="h-full w-28 lg:w-52 hover:cursor-pointer mr-4 rounded-lg"
    @click="showSlide = true"
  >
    <img
      class="h-full object-cover rounded-lg transition-transform duration-200 hover:scale-95 shadow-black shadow-md"
      :src="show.image.original"
      :alt="show.image.original"
    />
  </div>
  <Slide v-if="showSlide" @close="showSlide = false"><h1>Slide</h1></Slide>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TTvShow } from '~/types/types'
import Slide from '~/components/Slide.vue'

const showSlide = ref(false)

defineProps({
  show: { type: Object as PropType<TTvShow>, required: true },
})
</script>
