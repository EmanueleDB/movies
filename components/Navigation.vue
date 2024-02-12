<template>
  <nav class="h-24 bg-navigation flex items-center justify-start w-full">
    <div class="h-full ml-4 w-full">
      <NuxtImg src="/logo.png" alt="logo" class="h-24" />
    </div>
    <div class="pr-4 lg:pr-10">
      <Icon
        class="hover:cursor-pointer"
        :name="
          colorMode.preference === 'dark'
            ? 'meteocons:clear-day-fill'
            : 'meteocons:clear-night-fill'
        "
        size="40"
        @click="toggleTheme"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
