<template>
  <div class="main-carousel">
    <section class="swiper-container">
      <swiper
        navigation
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :autoplay="{
          delay: 212500,
          disableOnInteraction: false,
        }"
        :slidesPerView="'auto'"
        :centeredSlides="false"
        :spaceBetween="24"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          class="slide h-56"
          v-for="item in items"
          :key="item.image_url"
        >
          <div class="h-full flex justify-center">
            <div
              class="clickable-area absolute h-5/6 w-10/12 mx-auto z-10 cursor-pointer"
              @click="handleClickSlide(item)"
            />
            <img :src="item.image_url" />
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Cnote } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'
import 'swiper/css/lazy'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Lazy, Navigation, Pagination, Autoplay } from 'swiper'
import { ref, onMounted } from 'vue'
import useCnoteAPI from '@/api/cnote'
import { useRouter } from 'vue-router'

const router = useRouter()

const modules = [Lazy, Navigation, Pagination, Autoplay]

type CarouselData = {
  image_url: string
  to: string
}
const items = ref<CarouselData[]>([])

onMounted(async () => {
  const res = await useCnoteAPI.getCnotes()
  if (res.ok) {
    const data = res.data as Cnote[]
    console.log(data)
    items.value = data.map((item) => {
      const image_url = item.cnote_img
      return { image_url, to: item.cnote_id.toString() }
    })
  }
})

const handleClickSlide = (item: CarouselData) => {
  router.push(item.to)
}
</script>

<style>
.main-carousel .slide {
  border-radius: 4px;
  overflow: hidden;
}
.main-carousel .slide img {
  @apply w-full h-[173px] md:h-[206px] lg:h-[250px] xl:h-[340px] min-w-[592px];
  object-fit: cover;
}
.main-carousel .slide h1 {
  @apply absolute top-10 left-14 text-left text-neutral-50 text-2xl md:text-3xl drop-shadow-[3px_3px_3px_rgba(0,0,0,0.5)];
  font-weight: 700;
}
.main-carousel .swiper-pagination {
  bottom: 10px;
  left: 50%;
  width: 10%;
  transform: translateX(-50%);
}
.main-carousel .swiper-pagination-bullet {
  @apply bg-neutral-300;
}

.main-carousel .swiper-button-prev {
  left: -20px;
}
.main-carousel .swiper-button-next {
  right: -20px;
}

.main-carousel .swiper-button-prev,
.main-carousel .swiper-button-next {
  opacity: 0.7;
  @apply px-12 py-20;
  top: 35%;
  transform: scale3d(0.6, 0.9, 1);
}
.main-carousel .swiper-button-prev::after,
.main-carousel .swiper-button-next::after {
  @apply font-bold;
}
.main-carousel .swiper-button-disabled {
  opacity: 0.1;
}
@media (max-width: 1279px) {
  .main-carousel .swiper-button-prev,
  .main-carousel .swiper-button-next {
    top: 28%;
  }
}
@media (max-width: 1023px) {
  .main-carousel .swiper-button-prev,
  .main-carousel .swiper-button-next {
    top: 23%;
    transform: scale3d(0.5, 0.7, 1);
  }
}
@media (max-width: 767px) {
  .main-carousel .swiper-button-prev,
  .main-carousel .swiper-button-next {
    top: 18%;
  }
}
</style>
