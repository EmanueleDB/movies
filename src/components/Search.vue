<template>
  <div class="flex items-center">
    <div class="relative w-full lg:w-2/4">
      <input
        v-model="model"
        type="search"
        placeholder="Search for a TV show"
        class="w-full dark:text-white pl-7 py-2 rounded outline-0 border-primary dark:border-white border-4 appearance-none dark:bg-gray-600"
      />
      <Icon
        v-if="model"
        name="ic:baseline-clear"
        size="20"
        class="text-primary absolute right-2 top-3 dark:text-white"
        @click="model = ''"
      />
      <Icon
        name="material-symbols:search-rounded"
        size="20"
        class="text-primary absolute left-2 top-3 dark:text-white"
      />
    </div>
    <div class="relative inline-block text-left hover:cursor-pointer">
      <Icon
        name="material-symbols-light:filter-alt-outline-sharp"
        size="40"
        class="text-primary dark:text-white"
        @click="open = !open"
      />

      <div
        v-if="open"
        ref="dropdown"
        class="z-50 rounded origin-top-right absolute right-0 lg:left-0 mt-2 w-40 shadow-inner dark:shadow-white bg-white dark:bg-gray-600 ring-1 ring-black ring-opacity-5"
      >
        <div v-for="filter of ['Name', 'Network', 'Genre']" :key="filter">
          <span
            :class="[
              'block px-4 py-2 hover:bg-primary dark:hover:bg-white hover:cursor-pointer rounded text-lg',
              [
                active === filter
                  ? 'text-primary dark:text-primary hover:text-white'
                  : 'text-black hover:text-white dark:text-white dark:hover:text-black',
              ],
            ]"
            @click="emitFilter(filter)"
            >{{ filter }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const model = defineModel({ type: String, default: '' })
const open = ref(false)
const emit = defineEmits(['filter'])

const active = ref('Name')
const emitFilter = (filter) => {
  active.value = filter
  emit('filter', filter)
  open.value = false
}

const dropdown = ref(null)
onClickOutside(dropdown, () => {
  if (open.value) open.value = false
})
</script>

<style scoped>
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
</style>
