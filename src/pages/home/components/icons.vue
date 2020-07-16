<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for='page in pages' :key='page.index'>
        <div class="icon" v-for='item in page' :key='item.id'>
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="img-con">
          </div>
          <p class="icon-txt">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconsList: Array
  },
  data: function () {
    return {
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconsList.forEach(function (item, index) {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/var.styl'
    @import '~@/assets/styles/mixin.styl'
    .icons >>> .swiper-container{
        height: 0
        padding-bottom: 50%
    }
    .icons{
        margin-top .2rem
        height: 0
        padding-bottom: 50%
    }
    .icons .icon{
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
    }
    .icon-img{
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .12rem
    }
    .icon-txt{
        position absolute
        bottom 0
        width 100%
        ellipsis()
        text-align center
        line-height .44rem
        color $txtColor
    }
    .img-con{
        display block
        margin 0 auto
        height 100%
    }
</style>
