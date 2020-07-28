<template>
    <div class="header">
        城市选择
        <router-link to='/'>
          <div class="iconfont back-header">&#xe697;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/var.styl';
  .header{
      position relative
      height: $headerHeight;
      line-height: .86rem;
      text-align: center;
      background-color: $bgColor;
      overflow: hidden;
      color: #fff;
      font-size: .32rem;
  }
  .back-header{
      position absolute
      color: #fff;
      font-size: .6rem;
      width: .64rem;
      text-align: center;
      left: 0;
      top: 0;
  }
</style>
