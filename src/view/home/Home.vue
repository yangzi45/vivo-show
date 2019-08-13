<template>
   <div  class="Home">
     <div class="HomeHeader"><i class="iconfont icon-VIVO"></i></div>
     <div class="offical"><img src='../../../static/img/official.png' alt="图片" style="height: 100%;width: 100%"/></div>
     <Home-Swipe></Home-Swipe>
     <Home-List></Home-List>
     <Home-Container :todos="todos"></Home-Container>
      <Home-Footer></Home-Footer>
   </div>
</template>
<script>
  import HomeSwipe from './component/HomeSwipe'
  import HomeList from './component/HomeList'
  import HomeContainer from './component/HomeContainer'
  import HomeFooter from '../common/footer'
  import axios from 'axios'
  export default {
    name:'home',
    components:{
      HomeSwipe,
      HomeList,
      HomeFooter,
      HomeContainer
    },
    data(){
      return{
        todos:[]
      }
    },
    methods:{
      init(){
        axios.get("/static/ceshi.json").then(res=>{
          this.todos=res.data.data.home
        })
      }
    },
    mounted(){
      this.init()
    }
  }
</script>
<style scoped>
  .Home{
    border-bottom: 10px;
  }
  .HomeHeader{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.35rem;
     /*margin-left: -2rem;*/
    background: white
  }
  .HomeHeader i{
    font-size: 0.55rem;
    margin-left: -4.5rem
  }
  .offical{
    width: 100%;
    height: 0.8rem;
    background: white;
    margin-top: 1.33rem;
  }
</style>
