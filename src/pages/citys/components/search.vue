<template>
  <div>
    <div class="search">
      <input class="search-input"
      type="text"
      placeholder="请输入城市名或拼音"
      v-model="keyword">
    </div>
    <div class="search-content" ref="wrapper" v-show='keyword'>
      <ul>
        <li v-for='item of list' :key="item.id" class="search-item border-bottom">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到想要的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cityslist: Object
  },
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword: function () {
      if (!this.keyword) {
        this.list = []
        return
      }
      if (!this.timer) {
        let that = this
        this.timer = setTimeout(function () {
          const res = []
          for (let i in that.cityslist) {
            that.cityslist[i].forEach((element) => {
              if (element.spell.indexOf(that.keyword) > -1 || element.name.indexOf(that.keyword) > -1) {
                res.push(element)
              }
            })
          }
          that.list = res
          that.timer = null
        }, 100)
      }
    }
  },
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/var.styl';
    .search{
        height .72rem;
        background-color $bgColor;
        padding 0 .1rem;
    }
    .search-input{
        width 100%
        height .62rem
        padding 0 .1rem
        border-radius .08rem
        line-height .62rem
        text-align center
        color #666
        box-sizing border-box
    }
    .search-content{
      overflow hidden
      position absolute
      top 1.58rem
      left 0
      right 0
      bottom 0
      background-color #eee
      z-index 1
    }
    .search-item{
      line-height .62rem
      padding-left .2rem
      background #fff
    }
    .border-bottom {
      &:before {
        border-color: #ccc;
      }
    }
</style>
