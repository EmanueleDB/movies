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
import type { TTvShow } from '~/types/tvShow'

const props = defineProps({
  show: { type: Object as PropType<TTvShow>, required: true },
})

let sortedGroup = ref<Array<TTvShow>>([])

const sortedByRating = computed(() => {
  sortedGroup = props.show
  sortedGroup = sortedGroup.sort((a, b) => b.rating.average - a.rating.average)
})
</script>
