<template>
  <div>
    <NavBar />

    <div class="app-main flex flex-col justify-between">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/top/NavBar.vue'
</script>

<style scoped></style>
