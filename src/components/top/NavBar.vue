<template>
  <header class="navbar flex justify-between">
    <div class="wrapper flex items-center">
      <RouterLink to="/">
        <img class="logo" src="/vite.svg" alt="Coplay Logo" />
      </RouterLink>
      Cuppers'
    </div>
    <nav class="flex items-center gap-2">
      <RouterLink to="/map">
        <button>카페찾기</button>
      </RouterLink>
      <button>커피SNS</button>
      <button>카페추가요청</button>
      <button>아바타</button>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  @apply bg-neutral-200;
}
</style>
