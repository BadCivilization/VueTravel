<template>
  <div>
    <header-home>
    </header-home>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HeaderHome from './home/components/header'
import HomeSwiper from './home/components/swiper'
export default {
  name: 'Home',
  components: {
    HeaderHome,
    HomeSwiper
  }
}
</script>

<style>

</style>
