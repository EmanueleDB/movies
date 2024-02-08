<template>
  <div>
    <GenreSection :genre-groups="genreGroups" />
  </div>
</template>

<script setup lang="ts">
import type { TGroup } from '~/types/group'
import type { TTvShow } from '~/types/tvShow'

const { data } = await useFetch<Array<TTvShow>>('https://api.tvmaze.com/shows')

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
