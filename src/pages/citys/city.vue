<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <alpha-bet></alpha-bet>
  </div>

</template>

<script>
import CityHeader from './components/header'
import CityList from './components/list'
import CitySearch from './components/search'
import AlphaBet from './components/alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CitySearch,
    AlphaBet
  }
}
</script>

<style lang="stylus" scoped>

</style>
