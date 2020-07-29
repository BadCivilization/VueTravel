<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
          <div class="button-warrper">
            <div class="button">重庆</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">重庆</div>
          <div class="item border-bottom">重庆</div>
          <div class="item border-bottom">重庆</div>
          <div class="item border-bottom">重庆</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">重庆</div>
          <div class="item border-bottom">重庆</div>
          <div class="item border-bottom">重庆</div>
          <div class="item border-bottom">重庆</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">重庆</div>
          <div class="item border-bottom">重庆</div>
          <div class="item border-bottom">重庆</div>
          <div class="item border-bottom">重庆</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/var.styl';

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}

.title {
  line-height: 0.54rem;
  background-color: #eeeeee;
  padding-left: 0.2rem;
  font-size: 0.26rem;
  color: #666;
}

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
}

.button-warrper {
  width: 33.33%;
  float: left;
}

.button {
  text-align: center;
  margin: 0.1rem;
  padding: 0.1rem;
  border: solid 0.02rem #ccc;
  border-radius: 0.06rem;
}

.item {
  line-height: 0.7rem;
  color: #666;
  padding-left: 0.2rem;
}
</style>
