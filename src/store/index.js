import Vue from 'vue'
import Vuex from 'vuex'
import idb from '@/api/idb';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    plans: [],
    payments: [],
    savings: []
  },
  getters: {
    savings: state=>{
      
      let result = {label:[], fact: [], plan: []}
      for (let ix = 0; ix < state.savings.length; ix++) {
        const el = state.savings[ix]
        
        // result.label.push(`${el.label} ${el.id_saving ? el.id_saving : 'Новый'}`)
        result.label.push(`${el.label}`)
        result.fact.push(el.fact)
        result.plan.push(el.plan)
      }      

      return {
        labels: result.label,
        datasets: [
            {data: result.fact, backgroundColor: '#0063826b'
            ,label: 'Динамика накоплений'}, 
            {data: result.plan
            ,label: 'План'},
          ]
      }
    },
    is_complate: state =>{
      return state.categories.length > 0 && state.plans.length > 0
    },
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
    categories_dif: (state, gette) => {
      return state.categories.map((val)=>{                    
        return {...val, id: val.id_cat, dif: val.budget - gette.get_sum_category(val.id_cat)}
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
    },
    sum_payments: state => {
      return state.payments.reduce((acc, cur)=> {
        return acc + Number(cur.amount)
      }, 0)
    },
    get_sum_category: state => id => {      
      return state.payments.reduce((acc, cur)=> {
        return cur.category.id_cat == id ? acc + Number(cur.amount) : acc + 0
      }, 0)

    } 

  },
  mutations: {
    SET_SAVING(state, savings){
      state.savings = savings
    },
    ADD_SAVING(state, params) {
      state.savings.push(params)
    },
    ADD_CURMONTH_PAY(state, pay) {
      state.payments = pay     
    },
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
    addSaving({ commit }, params = []) {

      return new Promise((resolve, reject) => {
        idb.save('savings', params).then(()=>{
          commit('ADD_SAVING', params)
          resolve(params)
        }).catch(()=>{
          reject('Не удалось закрыть период.')
        })
      })
    },

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

    getSavings({ commit }) {
      idb.get('savings').then(saveing=>{
        commit('SET_SAVING', saveing)
      })
    },    

    getPaymentsCurMonth({ commit }) {
      idb.get('payments').then(payments=>{
        commit('ADD_CURMONTH_PAY', payments)
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
