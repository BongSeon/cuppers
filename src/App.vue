<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import useCafesAPI from './api/cafes'

onMounted(async () => {
  const res = await useCafesAPI.getCafe(1)
  console.log(res)
})
</script>

<style scoped></style>
