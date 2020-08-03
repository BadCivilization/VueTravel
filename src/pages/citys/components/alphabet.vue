<template>
    <ul class="word-list">
        <li class="item" v-for='(item, key) of cityslist' :key='key'>{{key}}</li>
    </ul>
</template>

<script>
export default {
  name: 'AlphaBet',
  props: {
    cityslist: Object
  }
}
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/var.styl'
    .word-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        bottom: 0;
        top: 3rem;
        width: .4rem;
    }
    .item{
        line-height: .4rem;
        color: $bgColor;
    }
</style>
