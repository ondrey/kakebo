<template>
<div>

  <div class="plan" style="padding-bottom:5px" v-show="sum_budget_category">
   <div class="head_box" v-for="i in categories" :key="i.id">         
    <div :class="dgclass(i.dif)" v-html="i.dif.toLocaleString()"></div>
    <a href="#" class="linkpage">{{i.name_cat}}</a>
    <div @click="$router.push({ name: 'New', params: i })" class="buttonplus"><span class="el-icon-circle-plus-outline buttoicon"></span></div>
  </div>
  </div>
      
  <div class="title" v-show="sum_budget_category">Расходы по категориям</div>
  
  
  <div class="plan">

    <div class="back back_jambo">
      
      <span style="font-size: small;">Остаток</span>
      <span>{{(sum_budget_category - sum_payments).toLocaleString()}}</span>
      
      <span style="font-size: small; text-align: end;"> {{sum_payments.toLocaleString()}} Расход <br> {{sum_budget_category.toLocaleString()}} Бюджет  </span>
    </div>

    <div class="buttonplus button_close_period" @click="alert = !alert"> <span class="el-icon-refresh buttoicon"></span> Накопить </div>
   

  </div>
  <div class="title">Итоги</div>


  
  <div class="plan">
    
    <div class="head_box">        
      <a href="#/current-cost" class="linkpage" style="text-align:left">Обязательные расходы</a>    
    </div>

    <div class="head_box" style="padding-bottom:5px">    
      <a href="#/current-income" class="linkpage" style="text-align:left">Доходы</a>      
    </div>

    <div class="head_box" style="padding-bottom:5px">    
      <a href="#/budget-cat" class="linkpage" style="text-align:left">Бюджет и план накоплений</a>
    </div>

  </div>

  <div class="title">Плановые платежи</div>
    <div>
      <line-chart :chart-data="datacollection"></line-chart>
    </div>    

<alert button_text="Хорошо" :visible="alert" title="Инфо!">
  Скоро заканчивается отчетный период
</alert>

</div>
  
</template>

<script>
import { mapGetters } from 'vuex';

import LineChart from '../components/chart'
import Alert from '../components/alert'



export default {
  components: {
      LineChart, Alert
  },  
  computed: {
    ...mapGetters(['sum_costs', 'sum_planes', 'sum_payments', 'sum_budget_category', 'categories', 'budget'])
  },
  created(){
    this.$store.dispatch('getPlans')
    this.$store.dispatch('getPaymentsCurMonth')
    this.$store.dispatch('getCategory')
  },
  data(){
    return {
      alert: false,
      datacollection: {
        labels: ['12.05', '16.06', '09.10', '12.05', '16.06', '09.10'],
        datasets: [
            {data: [-789, -300, -456, 0, 123, 250]
            ,label: 'Динамика накоплений'}, 
          ]
      },
    }
  },
  
  methods: {     
      dgclass(dg){
        return dg < 0 ? 'dgminus' : 'dgnormal'
      }      
  }
}
</script>

<style>
.button_close_period {
    font-size: small;
    padding: 3px 25px;
    text-align: center;
    width: 60%;
    margin: 19px auto;
}
</style>