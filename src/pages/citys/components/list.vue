<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-warrper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-warrper" v-for='item in hotcityslist' :key='item.id' @click='changecity(item.name)'>
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for='(item, key) of cityslist' :key='key' :ref='key'>
          <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
              <div class="item border-bottom" v-for='cityitem in item' :key='cityitem.id' @click='changecity(cityitem.name)'>{{cityitem.name}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  activated: function () {
    if (this.scroll != null) {
      this.scroll.refresh()
      this.scroll.options.click = true
    }
  },
  deactivated: function () {
  },
  props: {
    hotcityslist: Array,
    cityslist: Object,
    choseword: String
  },
  watch: {
    choseword: function () {
      if (this.choseword) {
        const element = this.$refs[this.choseword][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    changecity: function (cityname) {
      this.$store.dispatch('changeCityName', cityname)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState({
      city: 'city'
    })
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
