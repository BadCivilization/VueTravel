<template>
  <div>
    <header-home></header-home>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconsList='iconsList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>

<script>
import HeaderHome from './home/components/header'
import HomeSwiper from './home/components/swiper'
import HomeIcons from './home/components/icons'
import HomeRecommend from './home/components/recommend'
import HomeWeekend from './home/components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HeaderHome,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data: function () {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted: function () {
    this.getHomeinfo()
  },
  methods: {
    getHomeinfo: function getHomeinfo () {
      let that = this
      axios.get('/api/index.json').then(function (res) {
        that.swiperList = res.data.data.swiperList
        that.iconsList = res.data.data.iconList
        that.recommendList = res.data.data.recommendList
        that.weekendList = res.data.data.weekendList
      }, function (errr) {
        console.log(errr)
      })
    }
  }
}
</script>

<style>

</style>
