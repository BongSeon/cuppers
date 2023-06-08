<template>
  <nav>
    <ul>
      <li v-for="keyword in keywords" :key="keyword.keyword_id">
        {{ keyword.keyword_name }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import useKeywordsAPI from '@/api/keywords'

const keywords = ref()

onMounted(async () => {
  const res = await useKeywordsAPI.getLandingKeywords()
  if (res.ok) {
    const data = res.data //as Cnote[]
    keywords.value = data
    console.log(data)
    // items.value = data.map((item) => {
    //   const image_url = item.cnote_img
    //   return { image_url, to: item.cnote_id.toString() }
    // })
  }
})
</script>

<style scoped>
nav {
  @apply m-10 border-t border-l border-neutral-200;
}
nav ul {
  @apply grid grid-cols-8;
}
nav ul li {
  @apply aspect-square border-r border-b border-neutral-200 flex justify-center items-center;
}
</style>
