<template>
  <div class="home-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="list in imgs">
        <img :src="list.img"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>

</template>
<script>
  export default {
    name:'HomeSwipe',
    data(){
      return{
        imgs:[
          {
            img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg"
          },{
            img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
          }
        ]
        }
      }
  }
</script>
<style lang="stylus" scoped>
  .home-swipe
      height 4.5rem;
      margin-top 2px;
      img
          width 100%;
          height 4.5rem

</style>
