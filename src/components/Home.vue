<template>
  <div v-if="!data" class="flex justify-center mt-3">
    <Icon name="svg-spinners:blocks-shuffle-3" size="50" />
  </div>
  <GenreSection v-else :genre-groups="genreGroups" />
</template>

<script setup lang="ts">
import type { TGroup, TTvShow } from '~/types/types'

const { data } = await useFetch<Array<TTvShow>>(
  'https://api.tvmaze.com/shows',
  { server: false },
)

const genreGroups = computed(() => {
  if (data.value) return groupByGenre(data.value)
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
</script>
