<template>
    <div>
        <div class="banner" @click="galleryshow">
            <img src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="" class="banner-img">
            <div class="banner-info">
                <div class="banner-title">故宫(AAAAA景区)</div>
                <div class="banner-img-number">
                    <span class="iconfont">&#xe61a;</span> 12
                </div>
            </div>
        </div>
        <common-gallery :imgs='imgs' v-show="showgallery"
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
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p0/1909/4e/4e1afc2e1133ade7a3.img.jpg_r_800x800_d3eb324d.jpg', 'http://img1.qunarzz.com/sight/p0/1907/ca/ca68bd95bc36bdba3.img.jpg_r_800x800_33169c4b.jpg', 'http://img1.qunarzz.com/sight/p0/1907/e4/e4a734b0c3fb9598a3.img.jpg_r_800x800_ddb72294.jpg'],
      showgallery: false
    }
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
