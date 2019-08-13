<template>
  <div >
    <Detail-Header title="商品详情"></Detail-Header>
    <div class="goodDetailList">
      <ul style="background: white;">
        <li v-for="(goodDetail,index ) in goodDetails" :key="index">
          <div class="goodDetaiSwipe">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="list in goodDetail.homeSwipe">
                <img :src="list.swipe" alt="图片"/>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="goodDetailMain">
            <div class="goodDetailName">{{goodDetail.homeName}}</div>
            <div style="text-align: justify;font-size: 0.26rem;padding: 7px 0"><span style="color:#FF4B3D;margin-left: -0.15rem">【{{goodDetail.homeBright}}】</span>{{goodDetail.homeTitle}}</div>
            <div class="goodDetailPrice">￥{{ goodDetail.homePrice}}</div>
          </div>
          <div class="bugBuycar">
          <div class="buyNum">购买数量:</div>
          <div class="cartNum" >
            <a href="javascript:" class="cartReduce" @click="reduceNum(index)">-</a>
            <input type="text" v-model="goodDetail.homeValue" readonly="readonly"/>
            <a href="javascript:" class="catrAdd" @click="addNum(index)">+</a>
          </div>
          </div>
          <Detail-Layer></Detail-Layer>
          <div class="goodDetailBox">
            <mt-navbar v-model="selected" >
              <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
              <mt-tab-item id="tab-container2">参数</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected" swipeable>
              <mt-tab-container-item id="tab-container1">
                <div class="goodDetailImg">
                  <p v-for="Image in goodDetail.Images">
                    <img :src="Image.one" alt="详情图片">
                  </p>
                </div>
              </mt-tab-container-item>

              <mt-tab-container-item id="tab-container2">
                <div class="peizhi" v-html="goodDetail.homePeizhi"></div>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>

          <div class="goodDetailFooter">
            <div class="left">
              <div class="shop">
                <img src="../../../static/img/shop.png">
                <span>店铺</span>
              </div>

              <div class="collection">
                <div class="collection-box" @click="addCollection(goodDetail)" v-show='!shoucang'>
                  <i class="iconfont icon-collection"></i>
                  <span>收藏</span>
                </div>
                <div class="collection-box" @click="addCollection(goodDetail)" v-show='shoucang'>
                  <i class="iconfont icon-shoucangxuanzhong1" style="color: red"></i>
                  <span>取消</span>
                </div>
              </div>

              <div class="cart">
                  <div class="cartlength">{{cartlength}}</div>
                  <img src="../../../static/img/111.png" >
                  <span>购物车</span>
                </div>

            </div>
            <div class="rigth">
              <div class="add">
                <a href="javascript:void(0);" @click="add(goodDetail)">加入购物车</a>
              </div>
              <div class="purchase">
                <a href="javascript:void(0);" @click="pay(goodDetail.id,goodDetail.homeValue)">提交订单</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import DetailHeader from '../common/detailHeader'
  import DetailLayer from './component/detailLayer'
  import axios from 'axios'
  import {Toast} from 'mint-ui'
  import {mapGetters} from 'vuex'
 export default {
    name:'goodDetail',
   data(){
     return{
       goodDetails:[],
       homeSwipe:[],
       selected:'tab-container1',
       cartlength: 0,
       shoucang:false

     }
   },
   computed:{
     ...mapGetters(
       ["this.$store.state.collect.state"],
       ["this.$store.state.collect"],
       ["this.$store.state.cars"],

     )
   },
   components:{
     DetailHeader,
     DetailLayer,
   },

   created(){
      let id=Number(this.$route.query.id)
     axios.get("/static/ceshi.json").then(res => {
       for (let i = 0; i < res.data.data.home.length;i++){
         if (res.data.data.home[i].id ===id  ) {
           this.goodDetails.push(res.data.data.home[i]);
         }
       }
     });
      this.$store.state.collect.forEach(e=>{
        if(id===e.id){
          this.shoucang=e.state
        }
      });
     if(this.$store.state.cars.length){
       this.cartlength=this.$store.state.cars.length
     }

   },
   methods:{
     addCollection(e){
       this.shoucang=!this.shoucang
       console.log(e)
       let data={
         id:e.id,
         img:e.homeImg,
         name:e.homeName,
         price:e.homePrice,
         state:this.shoucang
       }
       this.$store.dispatch('addByCollect',data)
     },
     reduceNum(index){
       if(this.goodDetails[index].homeValue<=1){
         Toast('不能再少啦')
       }else {
         this.goodDetails[index].homeValue--
       }
     },
     addNum(index){
        this.goodDetails[index].homeValue++
        console.log(this.goodDetails[index])
     },
     /*添加购物车*/
     add(datas){
       console.log(datas)
       let test=this.$store.state.cars.find(res=>{
         return datas.id=== res.id
       })
      if(!test){
        let data={
          id:datas.id,
          name:datas.homeName,
          img:datas.homeImg,
          price:datas.homePrice,
          value:datas.homeValue,
          danxluan:''
        }
        this.$store.dispatch('addByCars',data)
        if(this.$store.state.cars.length>=1){
          this.cartlength=this.$store.state.cars.length
        }
      }else{
        Toast({
          message:'该物品已存在购物车'
        })
      }

     }
   },
   mounted(){

   }
  }

</script>
<style>
  .goodDetailFooter {
    position: fixed;
    width: 100%;
    bottom: 0rem;
    height: 1.2rem;
    background: #F6F4F7;
    border-top: 1px solid #efefef;
  }
  .left {
    width: 45%;
    float: left;
    position: relative;
    font-size: .35rem;
  }
    .cart {
      width: 33%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      float: right;
      position: relative;
    }

      .cart img {
        width: 0.76rem;
        height: 0.7rem;
        display: block;
        margin: auto;
      }

      .cart span {
        text-align: center;
        color: #767676;
      }

    .shop {
      width: 33%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      float: left;
    }

      .shop img {
        width: 0.76rem;
        height: 0.7rem;
        display: block;
        margin: auto;
      }

      .shop span {
        display: block;
        text-align: center;
        color: #767676;
      }

    .collection {
      width: 33%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      float: left;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      color: #767676;
    }
      .collection-box {
        text-align: center;

      }

      .collection-box i {
        font-size: 0.6rem;
        display: block;
        text-align: center;
      }

      .collection-box span {
        text-align: center;
      }



  .rigth {
    width: 55%;
    float: right;
  }

  .add a {
        display: block;
        width: 50%;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        background: #FF9800;
        color: white;
        font-size: 0.35rem;
        float: left;
      }


  .purchase a {
        float: left;
        display: block;
        width: 50%;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        color: white;
        font-size: 0.35rem;
        background: #E3211E;
      }


  .goodDetailList{
    margin-bottom: 1.5rem;
  }
  .goodDetaiSwipe{
    height: 5.7rem;
    /*margin-top: 3px;*/
    background: white;
  }
  .goodDetaiSwipe img {
    width: 65%;
    height: 5rem;
    display: block;
    margin: auto;
    margin-top: 45px;


  }
  .goodDetailMain{
    height: 3.2rem;
    width: 100%;
    padding: 3%;
    border-bottom: 1px dotted gray;
  }
  .goodDetailName {
    font-size: 0.35rem;
    font-weight: 400;
    margin-left: -4.5rem;
  }
  .goodDetailPrice{
    font-size: 0.6rem;
    color: red;
    margin-left: -5rem;
  }
  .bugBuycar{
    width: 100%;
    height: 1.2rem;
    padding: 4%;
    font-size: 0.3rem;
    border-bottom: 1px dotted gray;
  }
  .buyNum{
    float: left;
    margin-top: 0.08rem;
  }
  .cartNum input{
    width: 0.7rem;
    height: 0.5rem;
    line-height: 0.5rem;
    float: left;
    border: 1px solid #b2b2b2;
    border-right: none;
    text-align: center;
    color: black;
    font-size: 0.3rem;
  }
  .cartReduce{
    width: 0.7rem;
    height: 0.5rem;
    line-height: 0.5rem;
    display: block;
    background: white;
    float: left;
    border: 1px solid #b2b2b2;
    border-right: none;
    text-align: center;
    font-size: 0.35rem;
    color: black;
    margin-left: 0.2rem;
  }
  .cartlength {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 1px;
    left: 30px;
    background: #f81301;
    border-radius: 50%;
    text-align: center;
    line-height: 15px;
    color: white;
  }


  .catrAdd{
    width: 0.7rem;
    height: 0.5rem;
    line-height: 0.5rem;
    display: block;
    background: white;
    float: left;
    border: 1px solid #b2b2b2;
    text-align: center;
    font-size: 0.35rem;
    color: black;
    /*margin-left: 0.2rem;*/
  }
  .peizhi {
    width:90%;
    margin:auto;
  }
    .peizhi div{
      margin-bottom:.5rem;
      margin-top:.5rem;
    }
    .peizhi h3 {
      height: 2rem;
      line-height: 2.3rem;
      font-size: 0.5rem;
      border-bottom: 1px solid #ccc;
    }
    .peizhi span {
      font-size: 0.38rem;
      color: #888;
      margin-top: .3rem;
      display: block;
    }
    .peizhi p {
      height: .55rem;
      color: #888;

  }
  .goodDetailImg {
    margin-top: 4px;
    margin-bottom: 6px;
  }
  .goodDetailImg img {
    width: 100%;
    height: auto;
    display: block;
  }


</style>
