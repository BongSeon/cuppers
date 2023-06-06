<template>
  <button
    class="btn min-h-10"
    @click="handleClick"
    :class="{ 'icon-only': !text, loading }"
  >
    <!-- 로딩 애니메이션 -->
    <spinner v-if="loading" class="h-full py-2" />

    <img
      v-if="!props.loading && props.image"
      class="inline-block"
      :src="image"
      :alt="props.text"
    />
    <Icon
      v-if="!props.loading && props.icon"
      :icon="props.icon"
      class="icon"
      :class="{
        'mr-1': props.text,
      }"
    />
    <Icon
      v-if="!props.loading && props.icon2"
      :icon="props.icon2"
      class="icon"
    />
    <span class="text uppercase" v-if="!props.loading && (text || text == '0')">
      {{ text }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const router = useRouter()

interface Props {
  text?: string
  image?: string
  icon?: string
  icon2?: string
  to?: string
  loading?: boolean
}

const props = defineProps<Props>()
// ({
//   text: { type: String, required: false, default: null },
//   image: { type: String, required: false, default: null },
//   hero: { type: String, required: false, default: null },
//   to: { type: String, required: false, default: null },
//   loading: { type: Boolean, required: false, default: false },
// })
props.text

const handleClick = (event: any) => {
  if (props.to) {
    event.stopPropagation()
    router.push(props.to)
  }
}
</script>

<style>
.btn {
  @apply flex items-center rounded-md text-black justify-center duration-150  min-w-[40px] px-4 gap-[3px];
  @apply border border-neutral-300 rounded;
  @apply hover:bg-neutral-100 hover:border-neutral-400;
  @apply focus:shadow-lg focus:ring-1 focus:ring-neutral-500 focus:ring-opacity-70;
}

/* size */
.btn.btn-xl {
  @apply text-lg h-[54px] min-w-[54px] px-6 gap-2;
}
.btn.btn-lg {
  @apply text-lg h-14 min-w-[48px] px-5 gap-1.5;
}
.btn.btn-md {
  @apply text-base h-10 min-w-[42px] px-4 gap-1;
}
.btn.btn-sm {
  @apply text-xs h-9 min-w-[36px] px-3 gap-0.5;
}
.btn.btn-xs {
  @apply text-xs h-[30px] px-2 gap-0.5 min-w-[30px];
}

.btn.icon-only {
  @apply p-0;
}
.btn.loading-rotate {
  opacity: 0.7;
  animation: loading;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}

.btn.primary,
.btn-modal-action {
  @apply text-white bg-primary border border-primary hover:bg-blue-700 focus:ring-blue-700;
}
.btn.secondary {
  @apply text-white bg-secondary border border-secondary hover:bg-orange-600 focus:ring-orange-700;
}
.btn.gray {
  @apply text-neutral-800 bg-neutral-100 border border-neutral-100 hover:bg-gray-200 focus:ring-gray-300;
}
.btn.darkgray {
  @apply text-neutral-200 bg-neutral-700 border-none  hover:bg-neutral-700 focus:ring-gray-400;
}
.btn.secondary-outline {
  @apply text-secondary border-secondary bg-white  hover:bg-orange-100 hover:border-orange-100 focus:ring-orange-600;
}
.btn.primary-outline {
  @apply text-primary border-primary bg-white border-opacity-50 hover:bg-primary hover:text-white hover:bg-opacity-90;
}
.btn.danger,
.negative .btn-modal-action {
  @apply text-white bg-negative border-negative border-opacity-50 hover:bg-red-700 hover:bg-opacity-90;
}

button:disabled,
button[disabled],
.btn:disabled,
.btn.disabled {
  @apply text-neutral-400 bg-neutral-200 border-neutral-200 cursor-default hover:bg-neutral-200 hover:text-neutral-400;
}
.btn.darkgray:disabled {
  @apply bg-neutral-700 text-neutral-600 opacity-80 cursor-not-allowed;
}

.btn-map {
  @apply border-0 rounded-full h-12 px-5 bg-white text-lg duration-300 hover:bg-white z-40;
  position: sticky;
  bottom: 50px;
  margin-bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
}
.btn-map:hover {
  box-shadow: 0px 0px 22px 5px rgba(0, 0, 0, 0.15);
}
.btn-scroll-top {
  @apply border-0 rounded-full bg-white text-lg duration-300 hover:bg-white w-14 h-14 opacity-0 translate-y-8;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
}
.btn-scroll-top.show {
  @apply opacity-100 translate-y-0;
}
.btn-scroll-top.bottom-right {
  @apply fixed bottom-12 right-12 z-40;
}
.btn-scroll-top img {
  scale: 0.6;
}
.btn:not(.no-ani, .btn.disabled):active {
  animation: button-pop 200ms ease-out;
}
.btn.medium .text {
  @apply font-medium;
}
.btn.semibold .text {
  @apply font-semibold;
}
.btn.bold .text {
  @apply font-bold;
}
.btn.disabled {
  @apply bg-neutral-200 border-neutral-200;
}
.btn.loading {
  @apply bg-neutral-200 cursor-default;
}
.btn.style-none {
  @apply border-none hover:bg-transparent focus:ring-0 focus:shadow-none;
}

@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.95));
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loading-rotate {
  0% {
    color: #ddd;
    transform: rotate(0deg);
  }
  50% {
    color: #999;
    transform: rotate(180deg);
  }
  100% {
    color: #999;
    transform: rotate(360deg);
  }
}
</style>
