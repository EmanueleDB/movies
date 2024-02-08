<template>
  <div>{{ tvShows }}</div>
</template>

<script setup lang="ts">
const store = useStore()

const tvShows = computed(() => {
  return store.tvShows
})
</script>
