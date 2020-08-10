<template>
    <div>
        <detail-banner></detail-banner>
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
export default {
  name: 'Detail',
  components: {
    DetailBanner: DetailBanner,
    DetailHeader: DetailHeader,
    DetailList: DetailList
  },
  data: function () {
    return {
      list: [{
        title: '成人票',
        content: [{
          title: '成人三馆联票',
          content: [{
            title: '成人三馆联票 - 连锁店'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .con{
    height 30rem
  }
</style>
