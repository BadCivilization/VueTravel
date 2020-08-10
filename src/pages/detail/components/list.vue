<template>
    <div>
        <div class="list-item" v-for="(item, index) of list"
        :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon iconfont"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-content">
                <detail-list :list='item.children'></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    .item-title{
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
    }
    .border-bottom {
      &:before {
        border-color: #ccc;
      }
    }
    .item-title-icon{
        position relative
        display inline-block
        top .035rem
        width .1rem
        height .28rem
        background-color #00bfd4
        border-radius .05rem
    }
    .item-content{
        padding 0 .15rem
    }
</style>
