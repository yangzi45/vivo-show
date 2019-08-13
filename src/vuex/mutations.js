import state from './state'
const mutations={
  addCollect(state,data){
    state.collect.push(data)
    localStorage.setItem('collect',JSON.stringify(state.collect))
  },
  addCars(state,data){
    state.cars.push(data)
    localStorage.setItem('cars',JSON.stringify(state.cars))
  }
}
export default mutations
