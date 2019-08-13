<template>
  <div class="xuangoulist">
    <ul>
      <li><div v-model="id1" @click="linkTo(id1)"><img src="/static/img/xuangou.jpg" alt="选购"/></div></li>
      <li><div v-model="id2" @click="linkTo(id2)"><img src="/static/img/peijian.jpg" alt="配件"/></div></li>
      <li><div><img src="/static/img/pingbao.jpg" alt="屏保"/></div></li>
      <li><div><img src="/static/img/dingzhi.jpg" alt="定制"/></div></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        id1:'choose',
        id2:'part'
      }
    },
    methods:{
      linkTo(id){
        console.log(id)
        this.$router.push(`${id}`)
      }
    }

  }
</script>
<style lang="stylus" scoped>
  .xuangoulist
    display flex
    width 100%
    height 2rem
    justify-content: center;
    flex-direction: column;
    border-bottom 1px solid #f4f4f4;
    li
      float left
      width 25%
      height 100%
      div
        width 1.58rem
        height 1.59rem
        margin auto
        img
          display block
          width 100%
          height 100%


</style>
