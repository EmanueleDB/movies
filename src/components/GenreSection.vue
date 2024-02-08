<template>
  <div class="flex flex-col p-4">
    <div v-for="genre of genreGroups" :key="genre.genre" class="flex flex-col">
      <h2 class="mt-3 text-xl">{{ genre.genre }}</h2>

      <div class="flex overflow-x-auto h-40 lg:h-80">
        <div v-for="show of sortedShows(genre.TvShows)" :key="show.name">
          <ShowCard :show="show" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TGroup } from '~/types/group'
import type { TTvShow } from '~/types/tvShow'

defineProps({
  genreGroups: { type: Array<TGroup>, required: true },
})

const sortedShows = (shows: TTvShow[]) => {
  return [...shows].sort((a, b) => b.rating.average - a.rating.average)
}
</script>
