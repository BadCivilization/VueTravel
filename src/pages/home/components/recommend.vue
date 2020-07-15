<template>
  <div>
    <div class="recommend-title">
        热销推荐
    </div>
    <ul>
        <li class="item" v-for='item in recomList' :key='item.index'>
            <img :src="item.imgSrc" alt="" class="item-img">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-txt">{{item.txt}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recomList: [{imgSrc: 'http://img1.qunarzz.com/sight/p0/1709/e4/e4b97c2fbb4e696a3.img.png_250x250_0aa87bab.png', title: '重庆欢乐谷', txt: '重庆欢乐谷重庆欢乐谷'}, {imgSrc: 'http://img1.qunarzz.com/sight/p0/1903/42/42f4c3213e268149a3.img.jpg_200x200_2f9b8040.jpg', title: '重庆南山•海昌汤都', txt: '重庆南山•海昌汤都重庆南山•海昌汤都'}, {imgSrc: 'http://img1.qunarzz.com/sight/p0/1712/6b/6b76d111854eb88ba3.img.jpg_200x200_ccfe9d56.jpg', title: '重庆汉海海洋公园', txt: '重庆汉海海洋公园重庆汉海海洋公园'}, {imgSrc: 'http://img1.qunarzz.com/sight/p0/1803/b9/b9bc15fc941a2e8ba3.img.jpg_200x200_c33c2206.jpg', title: '梦幻奥陶纪', txt: '梦幻奥陶纪梦幻奥陶纪'}, {imgSrc: 'http://img1.qunarzz.com/sight/p0/1507/8d/8d1817185ad3f395.img.jpg_200x200_7971dc7e.jpg', title: '武隆天生三桥风景区', txt: '武隆天生三桥风景区武隆天生三桥风景区'}]
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
