const state={
  collect:localStorage['collect']?JSON.parse(localStorage['collect']):[], //商品收藏
  cars:localStorage['cars']?JSON.parse(localStorage['cars']):[], //加入购物车

}
export default state
