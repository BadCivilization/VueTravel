<template>
    <div>
        <router-link class="header-abs" tag="div" to="/" v-show="showabs">
            <span class="iconfont back-header">&#xe697;</span>
        </router-link>
        <div class="header-fixed"  v-show="!showabs" :style="opacityStyle">
            <div class="header">
                <div class="header-left">
                    <router-link class="iconfont back-header" to="/">&#xe697;</router-link>
                </div>
            <div class="header-txt">输入城市/景点/游玩主题</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data: function () {
    return {
      showabs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    windowScroll: function () {
      const sTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (sTop > 0) {
        let opa = sTop / 100
        opa = opa > 1 ? 1 : opa
        this.opacityStyle = {
          opacity: opa
        }
        this.showabs = false
      } else {
        this.showabs = true
      }
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.windowScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.windowScroll)
  }
}

</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/var.styl'
    @import '~@/assets/styles/mixin.styl'
    .header-abs{
        position absolute
        left .2rem
        top .2rem
        border-radius .4rem
        width .8rem
        height .8rem
        background-color rgba(0, 0, 0, 0.5)
    }
    .header-fixed{
        position fixed
        top 0
        left 0
        right 0
        z-index 2
    }
    .back-header{
        color #fff
        font-size .5rem
        line-height .8rem
        margin-left .13rem
    }

    .header{
        position relative
        background-color: $bgColor;
        color: #ffffff;
        display: flex;
        line-height: $headerHeight;
    }
    .header-left{
        width: .64rem;
        position absolute
    }
    .header-left .back-header{
        display: block;
        font-size: .6rem;
        text-align: center;
    }
    .header-txt{
        flex 1
        text-align center
    }

</style>
