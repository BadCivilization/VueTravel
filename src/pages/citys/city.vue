<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotcityslist='hotcityslist' :cityslist='cityslist'></city-list>
    <alpha-bet :cityslist='cityslist'></alpha-bet>
  </div>

</template>

<script>
import CityHeader from './components/header'
import CityList from './components/list'
import CitySearch from './components/search'
import AlphaBet from './components/alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CitySearch,
    AlphaBet
  },
  data: function () {
    return {
      hotcityslist: [],
      cityslist: {}
    }
  },
  mounted: function () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo: function () {
      let that = this
      axios.get('/api/city.json').then(function (res) {
        that.hotcityslist = res.data.data.hotCities
        that.cityslist = res.data.data.cities
      }, function (errr) {
        console.log(errr)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
