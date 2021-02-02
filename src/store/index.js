import Vue from 'vue'
import Vuex from 'vuex'
import idb from '@/api/idb';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    plans: [],

  },
  getters: {
    max_category_budget: (state, gette)=>{
      return (gette.budget - gette.sum_budget_category)
    },

    budget: (state, gette)=>{
      return gette.sum_planes + gette.sum_costs
    },
    categories: state => {
      return state.categories.map((val)=>{                
        return {...val, id: val.id_cat}
      })
    },

    plans: state => {
      return state.plans.map((val)=>{                
        return {...val, id: val.id_plan}
      }).filter(_=>{
        return !_.cost
      })
    },
    plans_cost: state => {
      return state.plans.map((val)=>{
        return {...val, id: val.id_plan}
      }).filter(_=>{
        return _.cost
      })
    },

    sum_planes: state => {
      return state.plans.reduce((acc, cur)=> {
        return !cur.cost ? acc + Number(cur.amount) : acc + 0
      }, 0)
    },
    sum_costs: state => {
      return state.plans.reduce((acc, cur)=> {
        return cur.cost ? acc + Number(cur.amount) : acc + 0
      }, 0)
    },
    sum_budget_category: state => {
      return state.categories.reduce((acc, cur)=> {
        return acc + Number(cur.budget)
      }, 0)
    }

  },
  mutations: {
    ADD_CAT(state, cat) {
      state.categories.push(cat)
    },
    ADD_PAY(state) {
      console.log(state)
    },
    ADD_PLAN(state, plan) {
      state.plans.unshift(plan)
    },

    SET_PLANS(state, list) {
      state.plans = list
    },

    SET_CAT(state, list) {
      state.categories = list
    },

    SET_BUDGET() {
      console.log('SET_BUDGET')
    },

    DEL_PLAN(state, id) {
      for (let ix = 0; ix < state.plans.length; ix++) {
        const el = state.plans[ix];
        if (el.id_plan == id) state.plans.splice(ix, 1);
      }
    },
    DEL_CAT(state, id) {
      for (let ix = 0; ix < state.categories.length; ix++) {
        const el = state.categories[ix];
        if (el.id_cat == id) state.categories.splice(ix, 1);
      }
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
        if (plan.cost) {
          plan.amount = 0 - Number(plan.amount)
        } else {
          plan.amount = Number(plan.amount)
        }

        idb.save('plans', plan).then(()=>{          
          commit('ADD_PLAN', plan)
          resolve(plan)
        }).catch(()=>{
          reject('Не удалось добавить планируемый платёж')
        })
      })
    },    

    getPlans({ commit }) {
      idb.get('plans').then(plans=>{
        commit('SET_PLANS', plans)
      })
    },

    deletePlan({ commit }, id) {
      idb.delete('plans', id).then(()=>{
        commit('DEL_PLAN', id)
      })
    },
    deleteCategory({ commit }, id) {
      idb.delete('categories', id).then(()=>{
        commit('DEL_CAT', id)
      })
    },


    getCategory({ commit }) {
      idb.get('categories').then(cats=>{
        commit('SET_CAT', cats)
      })      
    },    

    editBudget({ commit }, data) {
      idb.update('categories', 'id_cat', data.id_cat, {budget: data.budget}).then(()=>{
        commit('SET_BUDGET')
      })
    }
  }


})
