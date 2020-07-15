<template>
  <div>
    <header-home>
    </header-home>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HeaderHome from './home/components/header'
import HomeSwiper from './home/components/swiper'
import HomeIcons from './home/components/icons'
export default {
  name: 'Home',
  components: {
    HeaderHome,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>

</style>
