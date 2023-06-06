<template>
  <main class="px-res pt-10">
    <h4 class="landing-title -tracking-2 font-nanum">
      철학이 담긴<br />커피 한 잔<br /><span class="text-primary"
        >커퍼스' ☕</span
      >
    </h4>

    <figure class="my-10">
      <MainCarousel />
    </figure>

    <section class="keywords">
      <h4>CAFE KEYWORD</h4>
      <h5>키워드로 내게 맞는 카페를 찾아보세요</h5>

      <article>
        <ul>
          <li>keyword 1</li>
          <li>keyword 2</li>
          <li>keyword 3</li>
          <li>keyword 4</li>
        </ul>
      </article>
    </section>

    <section class="todays-cafe">
      <h4>Today's Cafe</h4>
      <h5>좋아할 만한 카페를 준비했어요</h5>

      <article>
        <figure>cafe 1</figure>
        <figure>cafe 2</figure>
        <figure>cafe 3</figure>
      </article>
    </section>

    <button>
      <icon icon="heroicons:map" />
      지도에서 보기
    </button>
  </main>
</template>

<script setup lang="ts">
import MainCarousel from '@/components/carousel/MainCarousel.vue'
</script>

<style scoped>
section {
  @apply p-10;
}
section.keywords {
  @apply bg-stone-600;
}
section.keywords article {
  @apply border-t border-l border-red-400;
}
section.keywords article ul li {
  @apply border-r border-b border-red-400;
}
section.todays-cafe article {
  @apply border-t border-l border-blue-600;
}
section.todays-cafe article figure {
  @apply border-r border-b border-blue-600;
}
.landing-title {
  @apply text-4xl md:text-5xl lg:text-6xl;
}
</style>
