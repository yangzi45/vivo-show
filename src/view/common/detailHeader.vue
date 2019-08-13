<template>
  <div class="header">
    <div class="left" @click="Return">
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    <div class="in">{{title}}</div>
  </div>
</template>
<script>
  export default {
    props:['title'],
    methods:{
      Return(){
        console.log(window.history.length)
        if(window.history.length<=1){
          this.$router.push('/home')
        }else{
          this.$router.go(-1)
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .header
    width 100%
    height 1rem
    z-index 1
    position fixed
    background white
    .in
      width 80%
      height 100%
      line-height 1rem
      float left
      text-align center
      font-size 0.35rem
    .left
      width 10%;
      height 100%
      float left
      i
        font-size: 0.4rem;
        line-height: 1rem;
        text-align: center;
        display: block;
    .rigth
      width 10%;
      height 100%
      float left


</style>
