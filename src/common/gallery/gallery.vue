<template>
    <div class="container" @click="gallerynoshow">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img :src='item' alt="" class="swiper-img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: true
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    gallerynoshow: function () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
    .container{
        z-index 3
        display flex
        flex-direction column
        justify-content center
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        background-color #000
    }
    .wrapper{
        width 100%
        height 0
        overflow hidden
        padding-bottom 100%
    }
    .swiper-img{
        width 100%
    }
</style>
