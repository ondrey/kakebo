<template>
<div>
  <div v-show="is_complate">

    <div class="plan" style="padding-bottom:5px">
      <div class="head_box" v-for="i in categories_dif" :key="i.id">
        <div :class="dgclass(i.dif)" v-html="i.dif.toLocaleString()"></div>
        <a href="#" class="linkpage">{{i.name_cat}}</a>
        <div @click="$router.push({ name: 'New', params: i })" class="buttonplus"><span class="el-icon-circle-plus-outline buttoicon"></span></div>
      </div>
      </div>      
      <div class="title">Остаток средств по категориям</div>
      
      
      <div class="plan">
        <div class="back back_jambo">      
          <span style="font-size: small;">Остаток</span>
          <span>{{(sum_budget_category - sum_payments).toLocaleString()}}</span>      
          <span style="font-size: small; text-align: end;"> {{sum_payments.toLocaleString()}} Расход <br> {{sum_budget_category.toLocaleString()}} Бюджет  </span>
        </div>
        <div style="text-align: end; margin: 0.5em;">
          <button class="buttonplus">Закрыть период</button>
        </div>
        
      </div>
      <div class="title">Статус</div>

  </div>
  

  
  <div class="plan">    
    <div v-show="!is_complate" style="padding: 0.5em; color: crimson; text-align: center; font-size: small;"> 
      
      Для начала отслеживания накоплений, заполните данные по своим ежемесячным платежам и даходам. 
    </div>

    <div class="head_box">        
      <a href="#/current-cost" class="linkpage" style="text-align:left">Ежемесячные траты</a>  {{sum_costs.toLocaleString()}}
    </div>


    <div class="head_box" style="padding-bottom:5px">    
      <a href="#/current-income" class="linkpage" style="text-align:left">Доходы</a>  {{sum_planes.toLocaleString()}}  
    </div>

    <div class="head_box" style="padding-bottom:5px" v-show="sum_planes">    
      <a href="#/budget-cat" class="linkpage" style="text-align:left">План</a> {{(budget - sum_budget_category).toLocaleString()}}
    </div>

  </div>

  <div class="title">Плановые платежи</div>
  
  <div>
    <line-chart :chart-data="datacollection"></line-chart>
  </div>    

</div>
  
</template>

<script>
import { mapGetters } from 'vuex';

import LineChart from '../components/chart'


export default {
  components: {
      LineChart
  },  
  computed: {
    ...mapGetters(['sum_costs', 'sum_planes', 'sum_payments', 'sum_budget_category', 'categories_dif', 'budget', 'is_complate'])
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