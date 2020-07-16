<template>
  <div>
    <div class="recommend-title">
        热销推荐
    </div>
    <ul>
        <li class="item" v-for='item in recommendList' :key='item.index'>
            <img :src="item.imgUrl" alt="" class="item-img">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-txt">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped lang='stylus'>
    @import '~@/assets/styles/mixin.styl'
    .recommend-title {
        margin-top: .2rem;
        line-height: .7rem;
        background-color: #F4F4F4;
        text-indent: .2rem;
    }
    .item {
        display: flex;
        height: 1.96rem;
        overflow: hidden;
        border-bottom: 1px solid #e7e7e7;
    }
    .item-img {
        width: 1.5rem;
        height: 1.5rem;
        padding: .2rem;
    }
    .item-info {
        flex: 1;
        min-width 0
        padding: .2rem;
        padding-left: 0;
    }
    .item-title {
        ellipsis()
        font-size: .32rem;
        font-weight: 700;
    }
    .item-txt {
        ellipsis()
        margin-top: .2rem;
    }
    .item-button{
        margin-top: .2rem;
        background-color: #ff9b0f;
        color: #fff;
        padding: .04rem .12rem;
        border-radius: .05rem;
    }
</style>
