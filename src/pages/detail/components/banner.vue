<template>
    <div>
        <div class="banner" @click="galleryshow">
            <img :src="bannerImg" class="banner-img">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-img-number">
                    <span class="iconfont">&#xe61a;</span> 12
                </div>
            </div>
        </div>
        <common-gallery :imgs='gallaryImgs' v-show="showgallery"
        @close='galleryclose'></common-gallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/gallery'
export default {
  name: 'Banner',
  components: {
    CommonGallery: CommonGallery
  },
  data: function () {
    return {
      showgallery: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  methods: {
    galleryshow: function () {
      this.showgallery = true
    },
    galleryclose: function () {
      this.showgallery = false
    }
  }
}

</script>

<style scoped lang="stylus">
    .banner{
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
    }
    .banner-img{
        width 100%
    }
    .banner-info{
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        height .6rem
        color #fff
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    }
    .banner-title{
        padding 0 .2rem
        flex 1
        font-size .36rem
    }
    .banner-img-number{
        margin-right .2rem
        padding 0 .25rem
        line-height .4rem
        height .4rem
        border-radius .2rem
        background-color rgba(0,0,0,.5)
    }
</style>
