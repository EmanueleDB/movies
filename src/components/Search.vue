<template>
  <div class="relative w-full lg:w-2/4">
    <input
      v-model="model"
      type="search"
      placeholder="Search for a TV show"
      class="w-full pl-7 py-2 rounded outline-0 border-primary border-2 appearance-none"
      @input="handleSearch"
    />
    <Icon
      v-if="model"
      name="ic:baseline-clear"
      size="20"
      class="text-primary absolute right-2 top-3"
      @click="model = ''"
    />
    <Icon name="material-symbols:search-rounded" size="20" class="text-primary absolute left-2 top-3" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel({ type: String, default: '' })
</script>

<style scoped>
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
</style>
