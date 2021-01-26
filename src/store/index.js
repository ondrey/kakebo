import Vue from 'vue'
import Vuex from 'vuex'
import idb from '@/api/idb';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []    
  },
  mutations: {

    ADD_CAT(state, cat) {
      state.categories.push(cat)
    },
    ADD_PAY(state) {
      console.log(state)
    }
  },
  actions: {
    addCategories({ commit }, categori = {}) {

      return new Promise((resolve, reject) => {
        idb.save('categories', categori).then(()=>{
          commit('ADD_CAT', categori)
          resolve(categori)
        }).catch(()=>{
          reject('Не удалось добавить категорию')
        })
      })
    },

    addPayments({ commit }, pay = {}) {

      return new Promise((resolve, reject) => {
        idb.save('payments', pay).then(()=>{
          commit('ADD_PAY', pay)
          resolve(pay)
        }).catch(()=>{
          reject('Не удалось добавить платёж в базу')
        })
      })
    }    
  }


})
