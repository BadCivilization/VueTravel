<template>
    <ul class="word-list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
        <li class="item">F</li>
        <li class="item">G</li>
        <li class="item">H</li>
        <li class="item">I</li>
        <li class="item">J</li>
    </ul>
</template>

<script>
export default {
  name: 'AlphaBet'
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
