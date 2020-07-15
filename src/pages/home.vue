<template>
  <div>
    <header-home>
    </header-home>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HeaderHome from './home/components/header'
import HomeSwiper from './home/components/swiper'
import HomeIcons from './home/components/icons'
import HomeRecommend from './home/components/recommend'
import HomeWeekend from './home/components/weekend'
export default {
  name: 'Home',
  components: {
    HeaderHome,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
