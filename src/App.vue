<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import useCafeAPI from './api/cafe'

onMounted(async () => {
  const res = await useCafeAPI.getCafe(1)
  console.log(res)
})
</script>

<style scoped></style>
