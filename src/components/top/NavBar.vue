<template>
  <header class="navbar">
    <div class="wrapper px-res fit">
      <div class="flex items-center">
        <RouterLink to="/" class="flex items-center gap-1">
          <img
            class="logo h-8 relative bottom-0.5"
            src="/logo.svg"
            alt="Site Logo"
          />
          <span class="font-caveat font-thin"> Cuppers' </span>
        </RouterLink>
      </div>
      <nav class="flex items-center gap-2 pr-2">
        <RouterLink to="/map">
          <button>{{ t('탐색') }}</button>
        </RouterLink>
        <button>커피SNS</button>
        <button>카페추가요청</button>
        <!-- 로그인 / My -->
        <BtnMy v-if="me" />
        <!-- <BtnLogin v-else /> -->
        <div v-else class="z-10 relative">
          <btn
            to="/login"
            icon="heroicons:user-circle-solid"
            class="btn-sm w-9 icon-2xl bg-white text-neutral-200 rounded-full border-neutral-300"
          />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import BtnMy from '@/components/top/BtnMy.vue'
import { useI18n } from 'vue-i18n'
import { useMeStore } from '@/stores/me.store'
import { storeToRefs } from 'pinia'

const meStore = useMeStore()
const { t } = useI18n()

const { me } = storeToRefs(meStore)
</script>

<style scoped>
.navbar {
  @apply relative h-12;
}
.wrapper {
  @apply shadow absolute bg-neutral-200 flex justify-between h-12 items-center;
}
</style>
