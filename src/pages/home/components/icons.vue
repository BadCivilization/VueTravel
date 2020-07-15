<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for='page in pages' :key='page.index'>
        <div class="icon" v-for='item in page' :key='item.id'>
          <div class="icon-img">
            <img :src="item.imgSrc" alt="" class="img-con">
          </div>
          <p class="icon-txt">{{item.txt}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      imgSrcList: [{id: '0001', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', txt: '热门景点'}, {id: '0002', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', txt: '一日游'}, {id: '0003', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png', txt: '两江夜游'}, {id: '0004', imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png', txt: '神秘武隆'}, {id: '0005', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png', txt: '重庆欢乐谷'}, {id: '0006', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png', txt: '重庆动物园'}, {id: '0007', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png', txt: '重庆动物园'}, {id: '0008', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png', txt: '重庆动物园'}, {id: '0009', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png', txt: '重庆动物园'}]
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.imgSrcList.forEach(function (item, index) {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/var.styl'
    @import '~@/assets/styles/mixin.styl'
    .icons >>> .swiper-container{
        height: 0
        padding-bottom: 50%
    }
    .icons{
        height: 0
        padding-bottom: 50%
    }
    .icons .icon{
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
    }
    .icon-img{
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .12rem
    }
    .icon-txt{
        position absolute
        bottom 0
        width 100%
        ellipsis()
        text-align center
        line-height .44rem
        color $txtColor
    }
    .img-con{
        display block
        margin 0 auto
        height 100%
    }
</style>
