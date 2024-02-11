<template>
  <div class="flex flex-col">
    <div
      v-for="genre of genreGroups"
      :key="genre.genre"
      class="flex flex-col relative group"
    >
      <h2 class="text-primary mt-3 text-2xl dark:text-white">
        {{ genre.genre }}
      </h2>
      <div
        :ref="(el) => setGenreRef(genre.genre, el as HTMLDivElement)"
        class="flex overflow-x-auto h-40 lg:h-80 scroll-smooth"
      >
        <div v-for="show of sortedShows(genre.tvShows)" :key="show.name">
          <TvShow :show="show" />
        </div>
      </div>

      <div
        :class="[
          'hidden lg:absolute lg:top-7 lg:h-full lg:-left-8 lg:w-10 lg:opacity-0 lg:group-hover:opacity-100 lg:items-center lg:justify-center lg:cursor-pointer',
          [genre.tvShows.length < 6 ? 'lg:hidden' : 'lg:flex'],
          [
            genre.tvShows.length < 7
              ? 'xl:hidden lg:hidden'
              : 'lg:flex xl:flex',
          ],
        ]"
        @click="scrollLeft(genre.genre)"
      >
        <Icon
          class="transform rotate-180 text-primary dark:text-white"
          name="material-symbols:play-arrow-outline-rounded"
          size="50"
        />
      </div>

      <div
        :class="[
          'hidden lg:flex lg:absolute lg:top-7 lg:-right-8 lg:h-full lg:w-10 lg:opacity-0 lg:group-hover:opacity-100 lg:items-center lg:justify-center lg:cursor-pointer',
          [genre.tvShows.length < 6 ? 'lg:hidden' : 'lg:flex'],
          [
            genre.tvShows.length < 7
              ? 'xl:hidden lg:hidden'
              : 'lg:flex xl:flex',
          ],
        ]"
        @click="scrollRight(genre.genre)"
      >
        <Icon
          class="text-primary dark:text-white"
          name="material-symbols:play-arrow-outline-rounded"
          size="50"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TGroup, TTvShow } from '~/types/types'

interface GenreRefs {
  [genre: string]: HTMLDivElement | null
}

defineProps({
  genreGroups: { type: Array<TGroup>, required: true },
})

const sortedShows = (shows: TTvShow[]) => {
  return [...shows].sort((a, b) => b.rating.average - a.rating.average)
}

const genreRefs = ref<GenreRefs>({})
const setGenreRef = (genre: string, el: HTMLDivElement | null) => {
  genreRefs.value[genre] = el
}

const scrollLeft = (genre: string) => {
  const el = genreRefs.value[genre]
  if (el) {
    el.scrollLeft -= 300
  }
}

const scrollRight = (genre: string) => {
  const el = genreRefs.value[genre]
  if (el) {
    el.scrollLeft += 300
  }
}
</script>
