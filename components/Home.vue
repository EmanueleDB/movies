<template>
  <div v-if="!data" class="flex justify-center mt-3">
    <Icon
      class="text-primary dark:text-white"
      name="svg-spinners:blocks-shuffle-3"
      size="50"
    />
  </div>
  <div v-else class="flex flex-col mt-4 lg:mt-8 px-4 lg:px-10 h-full">
    <Search v-model="searchQuery" @filter="setFilter" />
    <div v-if="searchQuery" class="mt-3 flex flex-wrap h-40 lg:h-80">
      <TvShow
        v-for="(item, index) of foundTvShows"
        :key="index"
        class="mb-3"
        :show="hasFilter(item)"
      />
    </div>
    <Genres v-else :genre-groups="genreGroups || []" />
  </div>
</template>

<script setup lang="ts">
import type { TGroup, TTvShow } from '~/types/types'

const { data } = await useFetch<Array<TTvShow>>(
  'https://api.tvmaze.com/shows',
  { server: false },
)
const genreGroups = computed(() => {
  if (data.value) return groupByGenre(data.value as Array<TTvShow>)
})

const groupByGenre = (data: Array<TTvShow>) => {
  return data.reduce((acc: Array<TGroup>, tvShow: TTvShow) => {
    tvShow.genres.forEach((genre: string) => {
      const genreGroup = acc.find((group: TGroup) => group.genre === genre)
      if (genreGroup) {
        genreGroup.tvShows.push(tvShow)
      } else {
        acc.push({ genre, tvShows: [tvShow] })
      }
    })
    return acc
  }, [])
}

const filter = ref('Name')
const setFilter = (value: string) => {
  searchQuery.value = ''
  filter.value = value
}

const searchQuery = ref('')
watch(searchQuery, (to) => {
  if (to.length) handleSearch()
})

let timeoutId: any = null
const handleSearch = () => {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    performSearch()
  }, 500)
}

const hasFilter = (item: any) => {
  if (filter.value === 'Name') return item.show
  else return item
}

const foundTvShows = ref<TTvShow[]>([])
const performSearch = async () => {
  foundTvShows.value = []
  if (searchQuery.value && filter.value === 'Name') {
    foundTvShows.value = await $fetch(
      `https://api.tvmaze.com/search/shows?q=${searchQuery.value}`,
    )
    // The API doesn't provide a search per genre or network, so I made it filtering the initial list of all the shows.
    // I didn't use the initial "data" array for the logic below, because a show can have multiple
    // genres, so I preferred to use my refactored array genreGroups in which the items are already divided per genre
    // The hasFilter method is needed because the 2 array structures are different and the function will tell the components where to get the data
  } else if (filter.value === 'Genre') {
    if (genreGroups.value) {
      for (const item of genreGroups.value) {
        if (item.genre.toLowerCase() === searchQuery.value.toLowerCase())
          foundTvShows.value = item.tvShows
      }
    }
  } else {
    if (genreGroups.value) {
      for (const item of genreGroups.value) {
        for (const show of item.tvShows) {
          if (
            show.network &&
            show.network.name.toLowerCase() === searchQuery.value.toLowerCase()
          ) {
            foundTvShows.value.push(show)
          }
        }
      }
    }
  }
}
</script>
