<template>
    <div>
        <div class="weekend-title">
            周末去哪儿
        </div>
        <ul>
            <li class="item" v-for='item in weekendList' :key='item.index'>
                <div class="item-img-box">
                    <img :src="item.imgSrc" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-txt">{{item.txt}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      weekendList: [{imgSrc: 'http://img1.qunarzz.com/sight/source/1812/4c/33ad31d025fef.jpg_r_640x214_7821b813.jpg', title: '重庆夜景大赏', txt: '享巴渝特色，赏两江风光，感受不一样的重庆夜景！'}, {imgSrc: 'http://img1.qunarzz.com/sight/source/1507/8e/f41005646c1e8e.jpg_r_640x214_65f25f65.jpg', title: '快乐湿身，水上狂欢', txt: '“快乐湿身，水上狂欢”门票低至5折起'}, {imgSrc: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg', title: '重庆必打卡', txt: '重庆，非去不可'}, {imgSrc: 'http://img1.qunarzz.com/sight/source/1506/1e/f97881dbd07520.jpg_r_640x214_f8c25916.jpg', title: '本地人带你耍', txt: '玩转小面之都，High翻天'}, {imgSrc: 'http://img1.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg', title: '重庆大美古镇', txt: '行走重庆最美古镇，让你瞬间穿越千年'}]
    }
  }
}
</script>

<style scoped lang='stylus'>
    .weekend-title {
        margin-top: .2rem;
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
