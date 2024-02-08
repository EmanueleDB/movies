<template>
  <div class="h-full w-28 lg:w-52 hover:cursor-pointer mr-4">
    <img
      class="h-full object-cover shadow-md hover:shadow-xl rounded-lg"
      :src="show.image.original"
      :alt="show.image.original"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TTvShow } from '~/types/tvShow'

defineProps({
  show: { type: Object as PropType<TTvShow>, required: true },
})
</script>
