<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="con"></div>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/head'
export default {
  name: 'Detail',
  components: {
    DetailBanner: DetailBanner,
    DetailHeader: DetailHeader
  }
}
</script>

<style scoped lang="stylus">
  .con{
    height 30rem
  }
</style>
