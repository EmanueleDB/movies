<template>
  <nav class="h-24 bg-navigation flex items-center justify-start w-full">
    <div class="h-full ml-4 flex-auto w-5/6">
      <img src="/logo.png" alt="logo" class="h-24" />
    </div>

    <Icon
      class="flex-auto w-1/6 hover:cursor-pointer"
      :name="
        colorMode.preference === 'dark'
          ? 'meteocons:clear-day-fill'
          : 'meteocons:clear-night-fill'
      "
      size="40"
      @click="toggleTheme"
    />
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
