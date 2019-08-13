<template>
  <div id="bottom">
    <ul class="bottom-ul">
      <router-link to="/Home" tag="li">
        <div>
          <i class="iconfont icon-shouye_xuanzhong"></i>
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/classies" tag="li">
        <div>
          <i class="iconfont icon-fenleixuanzhong"></i>
        </div>
        <span>分类</span>
      </router-link>
      <router-link to="/home" tag="li">
        <div>
          <i class="iconfont icon-dongtaixuanzhong"></i>
        </div>
        <span>动态</span>
      </router-link>
      <router-link to="/home" tag="li">
        <div>
          <i class="iconfont icon-wode-"></i>
        </div>
        <span>我的</span>
      </router-link>

    </ul>
  </div>

</template>
<script>
  export default {
  }
</script>
<style lang="stylus" scoped>
  #bottom
    width 100%;
    position fixed;
    background-color #ffffff
    bottom 0;
    color: #666
    .bottom-ul
      display flex;
      justify-content: center;
      align-items center;
      height 1.45rem;
      li
        width 25%
        display flex;
        justify-content center;
        flex-direction column;
        text-align center
        span
          font-size .3rem
        i
          font-size .55rem



</style>
