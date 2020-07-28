<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont back-header">&#xe697;</span>
    </div>
    <div class="header-input iconfont">&#xe6ac;输入城市/景点/游玩主题</div>
    <router-link to='/City'>
        <div class="header-right">城市
            <span class="iconfont arrow-header">&#xe62a;</span>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderHome'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/var.styl'
    .header{
        background-color: $bgColor;
        color: #ffffff;
        display: flex;
        line-height: $headerHeight;
    }
    .header-left{
        width: .64rem;
        float: left;
    }
    .header-left .back-header{
        display: block;
        font-size: .6rem;
        text-align: center;
    }
    .header-input{
        height: .64rem;
        line-height: .64rem;
        margin-top: .11rem;
        margin-left: .2rem
        padding-left .2rem
        flex: 1;
        background: #ffffff;
        border-radius: 5px;
        color: #ccc;
    }
    .header-right{
        width: 1.24rem;
        float: right;
        text-align: center;
        color: #fff;
    }
    .header-right .arrow-header{
        font-size: .25rem;
    }
</style>
