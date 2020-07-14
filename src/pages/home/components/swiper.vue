<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="slide in swiperList" :key="slide.id">
        <img :src="slide.url" alt="" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        speed: 300,
        autoplay: true
      },
      swiperList: [{url: 'http://img1.qunarzz.com/sight/source/1812/4c/33ad31d025fef.jpg_r_640x214_7821b813.jpg', id: '0001'}, {url: 'http://img1.qunarzz.com/sight/source/1507/8e/f41005646c1e8e.jpg_r_640x214_65f25f65.jpg', id: '0002'}, {url: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg', id: '0003'}]
    }
  }
}
</script>

<style scoped lang="stylus">
    .swiper-img{
        width: 100%
    }
</style>
