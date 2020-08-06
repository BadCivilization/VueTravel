<template>
  <swiper :options="swiperOptions" v-if="swiperList.length">
    <swiper-slide v-for="slide in swiperList" :key="slide.id">
        <img :src="slide.imgUrl" alt="" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data: function () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        speed: 500,
        autoplay: {
          disableOnInteraction: false,
          delay: 1000
        },
        loop: true,
        observer: true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
    .swiper-img{
        width: 100%
    }
</style>
