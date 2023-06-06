<template>
  <div v-if="meStore.me" class="btn-my z-10 relative">
    <button
      class="btn btn-sm p-1 rounded-full w-9 my-auto relative"
      @click="onClickDropMenu"
    >
      <div class="avatar">
        <div class="w-9 rounded-full ds-mask ds-mask-circle">
          <img :src="meStore.me.thumbnail_url" class="fit" alt="User Avatar" />
        </div>
      </div>
    </button>

    <!-- Dropdown Menu -->
    <transition name="fade-right">
      <div
        v-if="isDrop"
        ref="dropdownMyInfo"
        id="dropdownMyInfo"
        aria-labelledby="dropdownMyInfo"
      >
        <RouterLink
          to="/my"
          @click="isDrop = false"
          class="user-card bg-yellow-100"
        >
          <div class="avatar">
            <div class="h-[60px] rounded-full">
              <img :src="meStore.me.thumbnail_url" alt="Host Avatar" />
            </div>
          </div>
          <div class="user-content bg-blue-50">
            <div class="text-lg font-bold">{{ meStore.me.nickname }} 님</div>
            <div class="text-sm text-neutral-500 bg-red-50 line-1">
              {{ meStore.me.email }}
            </div>
          </div>
        </RouterLink>

        <ul>
          <li class="w-full" v-for="link in linkList" :key="link.name">
            <RouterLink :to="link.to" @click="isDrop = false">
              <div :class="{ 'mb-3': link.bottomLine }">
                {{ link.name }}
              </div>
            </RouterLink>
            <hr v-if="link.bottomLine" class="w-full pb-3 border-neutral-200" />
          </li>
          <div class="px-6 py-2">
            <!-- 언어 변경 -->
            <button
              @click="onClickDropLangMenu"
              class="btn py-2 w-full uppercase no-ani"
            >
              <icon icon="carbon:ibm-watson-language-translator" />
              {{ t('언어변경') }}

              <!-- 언어변경 : Dropdown Menu -->
              <transition name="fade-right">
                <div id="dropdownLanguage" v-if="isDropLangMenu">
                  <ul
                    class="py-5 px-5 text-gray-700"
                    aria-labelledby="dropdownLanguage"
                  >
                    <li>
                      <a @click="onClickLang('ko')" class="py-2"> 한국어 🇰🇷 </a>
                    </li>
                    <li class="w-full">
                      <a @click="onClickLang('ja')" class="py-2"> 日本語 🇯🇵 </a>
                    </li>
                    <li class="w-full">
                      <a @click="onClickLang('en')" class="py-2">
                        English 🇺🇸
                      </a>
                    </li>
                  </ul>
                </div>
              </transition>
            </button>
            <!-- 로그아웃 -->
            <!-- :text="t('logout')" -->
            <btn
              text="로그아웃"
              class="w-full py-2 mt-3 uppercase"
              @click="onClickLogout"
              :loading="loading"
            />
          </div>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useMeStore } from '@/stores/me.store'
import { useI18n } from 'vue-i18n'

const meStore = useMeStore()
const isDrop = ref(false)
const loading = ref<boolean>(false)
const dropdownMyInfo = ref<HTMLDivElement>()
const { t, locale } = useI18n()
const router = useRouter()
const isDropLangMenu = ref<boolean>(false)

const linkList = ref([
  {
    name: '좋아요한 카페',
    to: '/my',
    bottomLine: false,
  },
  {
    name: '가본 카페',
    to: '/my',
    bottomLine: false,
  },
  {
    name: '내 활동',
    to: '/my',
    bottomLine: true,
  },
])

onMounted(async () => {
  isDrop.value = false
})

const onClickDropMenu = () => {
  isDrop.value = !isDrop.value
}

const onClickDropLangMenu = () => {
  isDropLangMenu.value = !isDropLangMenu.value
}

const onClickLogout = () => {
  // if (loading.value) return
  // loading.value = true
  meStore.logout()
  // loading.value = false
  // if (res.ok) {
  router.push('/')
  // }
}

onClickOutside(dropdownMyInfo, () => {
  isDrop.value = false
  isDropLangMenu.value = false
})

const onClickLang = (lang: string) => {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<style scoped>
#dropdownMyInfo {
  @apply w-[17rem] border border-neutral-200 bg-white rounded divide-y divide-neutral-200 z-50 text-left text-base shadow absolute mt-3 -right-3;
}
ul {
  @apply py-3 text-gray-700 flex flex-col justify-evenly;
}
li {
  @apply block w-full hover:text-secondary transition-all duration-150;
}
li div {
  @apply px-6 font-semibold cursor-pointer block w-full py-2 text-neutral-600 hover:text-secondary transition-all duration-150;
}

.user-card {
  @apply w-full h-full flex items-center gap-4 text-start p-5;
}
.user-card .avatar {
  @apply shrink-0;
}
.user-content {
  @apply max-w-[155px]
  /* @apply flex flex-col justify-between; */;
}

#dropdownLanguage {
  @apply w-[8rem] border border-gray-200 bg-white rounded divide-y divide-gray-200 text-center text-base shadow absolute mt-0 -left-[9rem];
}
#dropdownLanguage li a {
  @apply cursor-pointer block w-full hover:text-orange-500 transition-all duration-150;
}
#dropdownLanguage div a {
  @apply cursor-pointer block w-full py-2 text-gray-600 hover:text-orange-500 transition-all duration-150;
}
</style>
