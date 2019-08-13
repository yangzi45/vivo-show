<template>
  <div class="main">
    <h3>爆款产品</h3>
    <div class="main_box">
      <ul>
        <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180405/20180405101609299910_original.jpg" width="100%"/>
        <li v-for="todo in todos" :key="todo.id" @click="open(todo.id)">
          <div class="list">
            <div class="image">
              <img :src="todo.homeImg" alt="图片"/>
            </div>
            <p class="name">{{todo.homeName}}</p>
            <p class="detail">{{todo.homeNametwo}}</p>
            <p class="price">￥{{todo.homePrice}}</p>
          </div>
        </li>
    </ul>
    </div>

  </div>
</template>
<script>
  export default {
    name:'HomeContainer',
    props:{
      todos:Array
    },
    methods:{
      open(id){
        this.$router.push({path:'goodDetail',query:{id:id}})
      }
    }

  }
</script>
<style>
  .main h3{
    display: block;
    height: 0.8rem;
    padding:0.2rem 5.5rem 0 0;
  }

  .main_box{
    height: 333px;
  }

  .main_box ul{
    overflow: hidden;
    margin-bottom: 1.5rem;
  }
  ul li{
    list-style: none;
  }
  .list{
    height: 5.5rem;
    background-color: white;
    width: 50%;
    float: left;
    border-right: 1px solid #f4f4f4;
    border-top: 1px solid #f4f4f4;
  }
  .price {
     color: red;
     margin: auto;
     text-align: center;
     font-size: 0.3rem;
   }

  .name {
    width: 80%;
    height: 0.5rem;
    line-height: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: auto;
    font-size: 0.29rem;
    font-weight: 800;
    text-align: center;
  }

  .detail {
    height: 0.48rem;
    font-size: 0.2rem;
    text-align: center;
  }
  .image {
         width: 100%;
         background: white;
       }
  .image img {
    width: 2.5rem;
    height: 2.3rem;
    display: block;
    margin: auto;
    margin-top: 0.5rem;
    margin-bottom:0.2rem
  }

</style>
