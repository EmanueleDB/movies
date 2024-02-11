<template>
  <div
    class="h-full w-28 lg:w-52 hover:cursor-pointer mr-2 lg:mr-4 rounded-lg"
    @click="fetchSeasons(show.id)"
  >
    <img
      class="h-full object-cover rounded-lg transition-transform duration-200 hover:scale-95 hover:shadow-black hover:shadow-md"
      :src="show.image ? show.image.original : '/placeholder.jpg'"
      :alt="show.image ? show.image.original : 'placeholder'"
    />

    <Slide v-if="showSlide" @close="showSlide = false">
      <div class="flex">
        <div class="flex flex-col px-2 lg:px-8">
          <h2 class="text-2xl">{{ show.name }}</h2>
          <span>
            <Icon
              class="text-primary"
              name="streamline:interface-favorite-award-ribbon-reward-like-social-rating-media"
              size="20"
            />
            {{ show.rating.average }}</span
          >
          <div class="flex mt-3">
            <img
              class="w-48 h-60 mt-3"
              :src="show.image.original"
              alt="image"
            />
            <div class="flex flex-col ml-3">
              <span class="mt-3">
                <Icon
                  class="text-primary"
                  name="material-symbols:connected-tv-outline-sharp"
                  size="20"
                />
                {{ show.network.name }}</span
              >
              <span class="mt-3">
                <Icon class="text-primary" name="iconoir:language" size="20" />
                {{ show.language }}</span
              >
              <div class="flex flex-wrap w-full mt-3">
                <Icon
                  class="text-primary"
                  name="streamline:ai-generate-variation-spark"
                  size="20"
                />
                <span v-for="genre of show.genres" :key="genre" class="ml-1">{{
                  genre
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="seasons[0].image.length"
        class="flex flex-col mt-3 px-2 lg:px-8"
      >
        <h3 class="text-xl">Seasons</h3>
        <div class="flex flex-wrap mt-3 w-full">
          <img
            v-for="season of seasons"
            :key="season.id"
            class="w-[calc(25%-12px)] md:w-24 h-full mr-3 mb-3"
            :src="season.image ? season.image : ''"
            alt="season-image"
          />
        </div>
      </div>
      <div class="flex mt-3 px-2 lg:px-8">
        <span v-html="show.summary" />
      </div>
    </Slide>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import Slide from './Slide.vue'
import type { TTvShow } from '~/types/types'

interface ISeason {
  id: number
  image: string
}
const showSlide = ref(false)

defineProps({
  show: { type: Object as PropType<TTvShow>, required: true },
})

const seasons = ref<ISeason[]>([])

const fetchSeasons = async (id: number) => {
  const data: ISeason[] = await $fetch(
    `https://api.tvmaze.com/shows/${id}/seasons`,
  )
  if (!data) console.log('There are no seasons for this Tv show')
  else
    data.forEach((season: ISeason) => {
      seasons.value.push({
        id: season.id,
        image: (season.image as { original?: string })?.original || '',
      })
    })
  showSlide.value = true
}
</script>
