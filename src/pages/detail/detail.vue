<template>
    <div>
        <detail-banner :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></detail-banner>
        <detail-header></detail-header>
        <div class="con">
          <detail-list :list='list'></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/head'
import DetailList from './components/list'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner: DetailBanner,
    DetailHeader: DetailHeader,
    DetailList: DetailList
  },
  data: function () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  mounted: function () {
    this.getDetailData()
  },
  methods: {
    getDetailData: function () {
      let that = this
      axios.get('/api/detail.json?id' + this.$route.params.id).then(function (res) {
        that.list = res.data.data.categoryList
        that.sightName = res.data.data.sightName
        that.bannerImg = res.data.data.bannerImg
        that.gallaryImgs = res.data.data.gallaryImgs
      }, function (errr) {
        console.log(errr)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .con{
    height 30rem
  }
</style>
