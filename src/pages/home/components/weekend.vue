<template>
    <div>
        <div class="weekend-title">
            周末去哪儿
        </div>
        <ul>
            <li class="item" v-for='item in weekendList' :key='item.index'>
                <div class="item-img-box">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-txt">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped lang='stylus'>
    .weekend-title {
        line-height: .7rem;
        background-color: #F4F4F4;
        text-indent: .2rem;
    }
    .item {
        height: 4.2rem;
        overflow: hidden;
        border-bottom: 1px solid #e7e7e7;
    }
    .item-img-box {
        height 3.1rem
    }
    .item-img {
        width 100%
    }
    .item-info {
        padding .2rem
        height 1rem
    }
    .item-title {
        ellipsis()
    }
    .item-txt {
        ellipsis()
        margin-top: .1rem;
        color: #616161;
    }
</style>
