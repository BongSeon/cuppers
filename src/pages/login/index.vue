<template>
  <div class="fit bg-blue-100 p-10">
    <btn
      class="mx-auto h-10 bg-neutral-100"
      text="로그인"
      @click="handleLogin"
    />
  </div>
</template>

<script setup lang="ts">
import { useMeStore } from '@/stores/me.store'
const meStore = useMeStore()
const router = useRouter()

const handleLogin = () => {
  meStore.login()
  router.push('/')
}
</script>

<style></style>
