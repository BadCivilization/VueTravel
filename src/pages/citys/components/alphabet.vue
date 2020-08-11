<template>
    <ul class="word-list">
        <li class="item" v-for='item in letters' :key='item' @click='handleClick'
        @touchstart.prevent='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'
        :ref='item'>{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'AlphaBet',
  props: {
    cityslist: Object
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cityslist) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick: function (e) {
      this.$emit('listroll', e.target.innerText)
    },
    handleTouchStart: function (e) {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (!this.timer) {
          let that = this
          this.timer = setTimeout(function () {
            that.timer = null
            const touchY = e.touches[0].clientY
            const index = Math.floor((touchY - that.startY) / 20)
            if (index >= 0 && index < that.letters.length) {
              that.$emit('listroll', that.letters[index])
            }
          }, 16)
        }
      }
    },
    handleTouchEnd: function (e) {
      this.touchStatus = false
    }
  },
  data: function () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated: function () {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/var.styl'
    .word-list{
        position fixed
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        width: .4rem;
    }
    .item{
        line-height: .4rem;
        color: $bgColor;
    }
</style>
