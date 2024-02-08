<template>
  <template v-for="genre of genreGroups" :key="genre.TvShows">
    <div
      class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
    >
      <div v-for="show of genre.TvShows" :key="show.name">
        <div class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
          <div class="aspect-w-16 aspect-h-9">
            <img
              class="object-cover shadow-md hover:shadow-xl rounded-lg"
              :src="show.image.original"
              alt=""
            />
          </div>
        </div>
      </div></div
  ></template>
</template>

<script setup lang="ts">
import type { TGroup } from '~/types/group'

defineProps({
  genreGroups: { type: Array<TGroup>, required: true },
})
</script>
The name
