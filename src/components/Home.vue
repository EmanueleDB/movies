<template>
  <div v-if="!data" class="flex justify-center mt-3">
    <Icon class="text-primary" name="svg-spinners:blocks-shuffle-3" size="50" />
  </div>
  <div v-else class="flex flex-col mt-4 lg:mt-8 px-4 lg:px-10">
    <Search v-model="searchQuery" />
    <div v-if="searchQuery" class="mt-3 flex flex-wrap h-40 lg:h-80">
      <TvShow
        v-for="(item, index) of foundTvShow"
        :key="index"
        class=""
        :show="item.show"
      />
    </div>
    <Genres v-else :genre-groups="genreGroups" />
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
        genreGroup.TvShows.push(tvShow)
      } else {
        acc.push({ genre, TvShows: [tvShow] })
      }
    })
    return acc
  }, [])
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

const foundTvShow = ref({})
const performSearch = async () => {
  foundTvShow.value = []
  if (searchQuery.value) {
    foundTvShow.value = await $fetch(
      `https://api.tvmaze.com/search/shows?q=${searchQuery.value}`,
    )
  }
}
</script>
