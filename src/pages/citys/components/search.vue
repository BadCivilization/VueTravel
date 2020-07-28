<template>
  <div class="search">
      <input class="search-input" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
