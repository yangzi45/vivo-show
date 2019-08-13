<template>
  <div class="choose">
    <Detail-Header title="选购手机"></Detail-Header>
    <div class="_choose_twoMain">
      <div class="upper">
        <span class="list" v-for="(type,index) in phoneData.upper" :key="index" @click="btn(index)" :class="{active:index===phoneIndex}">{{type.name}}</span>
      </div>
      <div class="sort">
        <p>价格升序</p>
        <p>价格降序</p>
        <p>销量优先</p>
      </div>
      <div>
        <div class="phonedata" v-for="data in lowwer.lower_data" @click="detail(data.id)">
          <img :src="data.ImageOne"/>
          <p>{{data.name}}</p>
          <p>{{data.nametwo}}</p>
          <div style="color: red; font-size: 16px;margin-top: 2px">￥{{data.Price}}</div>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
  import DetailHeader from './common/detailHeader';
  import axios from 'axios'
  export default {
    name:'choose',
    components:{
      DetailHeader,
    },
    data(){
      return{
        phoneData:[],
        phoneIndex:0,
        lowwer:[],
      }
    },
    created(){
      axios.get('/static/ceshi.json').then(res=>{
        this.phoneData=res.data.data.phone
        this.lowwer=this.phoneData.lower[0]
      })
    },
    methods:{
      btn(index){
        this.phoneIndex=index
        this.lowwer=this.phoneData.lower[index]
        console.log(this.phoneIndex)
      },
      detail(id){
        this.$router.push({path:'goodDetail',query:{id:id}})
      }
    }
  }
</script>
<style>
  .choose {
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 999;
  }
  ._choose_twoMain{
    margin-top: 1rem;
  }
  .upper {
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    position: fixed;
    background: #ffffff;
    z-index: 1;
  }
  .upper span{
    height: 1.2rem;
    float: left;
    width: 25%;
  }
  .list{
    text-align: center;
    font-size: 0.30rem;
  }
  .sort{
    width: 100%;
    height: 0.8rem;
    background: #f4f4f4;
    position: relative;
    top: 1.3rem;
    display: flex;
    justify-content: center;
  }
  .sort p{
    line-height: 0.8rem;
    font-size: 0.28rem;
    float: left;
    width: 33%;
    text-align: center;
  }
  .phonedata{
    position: relative;
    top: 1.8rem;
    width: 50%;
    float: left;
    border-right: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    margin-bottom: 0.2rem;
  }
  .phonedata img{
    width: 50%;
    height: 2rem;
    margin: auto;
  }
  .active{
    color: #26a2ff;
    border-bottom: #26a2ff;
  }
</style>
