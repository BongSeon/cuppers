<template>
  <Icon :icon="icon" class="icon" :class="color" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  icon: string
  color?: string
}
const props = defineProps<Props>()
props.icon
</script>

<style>
.icon-xs {
  @apply w-4 h-4;
}
.icon-sm {
  @apply w-5 h-5;
}
.icon,
.icon-md {
  @apply w-6 h-6;
}
.icon-lg {
  @apply w-7 h-7;
}
.icon-xl .icon {
  @apply w-9 h-9;
}
.icon-2xl .icon {
  @apply w-10 h-10;
}
.icon-3xl .icon {
  @apply w-20 h-20;
}
.icon-4xl .icon {
  @apply w-40 h-40;
}
</style>
