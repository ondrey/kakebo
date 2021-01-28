import Vue from 'vue'
import Vuex from 'vuex'
import idb from '@/api/idb';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    plans: []
  },
  mutations: {

    ADD_CAT(state, cat) {
      state.categories.push(cat)
    },
    ADD_PAY(state) {
      console.log(state)
    }, 
    ADD_PLAN(state, plan) {
      
      state.plans.push(plan)
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
    },

    addPlans({ commit }, plan = {}) {
      return new Promise((resolve, reject) => {
        idb.save('plans', plan).then(()=>{
          commit('ADD_PLAN', plan)
          resolve(plan)
        }).catch(()=>{
          reject('Не удалось добавить планируемый платёж')
        })
      })
    },    

  }


})
