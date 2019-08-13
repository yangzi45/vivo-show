const actions={
  addByCollect({commit},data){
    commit('addCollect',data)
  },
  addByCars({commit},data){
    commit('addCars',data)
  }
}
export default actions
