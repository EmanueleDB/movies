<template>
  <div
    class="h-full w-28 lg:w-52 hover:cursor-pointer mr-4"
    @click="showSlide = true"
  >
    <img
      class="h-full object-cover shadow-md hover:shadow-xl rounded-lg"
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
