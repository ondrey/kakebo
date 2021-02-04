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
        <div style="margin: 0.5em;">
          <button class="buttonplus button_large" @click="alert=!alert">Закрыть период</button>
        </div>
        
      </div>
      <div class="title">Статус</div>

  </div>
  

  
  <div class="plan">    
    <div v-show="!is_complate" style="padding: 0.5em; color: crimson; text-align: center; font-size: small;"> 
      
      Для начала отслеживания накоплений, заполните данные по своим ежемесячным расходам и доходам. 
    </div>

    <div class="head_box">        
      <a href="#/current-cost" class="linkpage" style="text-align:left">Обязательные расходы</a>  {{sum_costs.toLocaleString()}}
    </div>


    <div class="head_box" style="padding-bottom:5px">
      <a href="#/current-income" class="linkpage" style="text-align:left">Плановые доходы</a>  {{sum_planes.toLocaleString()}}  
    </div>

    <div class="head_box" style="padding-bottom:5px" v-show="(budget - sum_budget_category)">    
      <a href="#/budget-cat" class="linkpage" style="text-align:left">Бюджет по категориям</a> {{(budget - sum_budget_category).toLocaleString()}}
    </div>

  </div>

  <div class="title">Плановые платежи</div>
  
  <div>
    <line-chart :chart-data="savings"></line-chart>
  </div>   


  <alert :visible.sync="alert" title="Закрытие периода">
    <div style="margin-top: 1em;">У вас осталось <span style="color:crimson; font-size: x-large;">{{(sum_planes - (Math.abs(sum_costs) + sum_payments)).toLocaleString()}}</span> средств. Вы хотите отправить их в накопление ?</div>
    <p style="color: darkgoldenrod; font-size: small; text-align: center;">
      
          Внимание! После закрытия периода, расходы по категорям будут анулированы. Внимательно проанализируйти расходы по категорям и пересмотрите бюджет если потребуеться. 
        
    </p>
    <button class="buttonplus button_large" @click="alert=!alert">Отмена</button>
    <button class="buttonplus button_large" style="float: right;" @click="close_period">Да, закрыть период</button>
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
    ...mapGetters(['sum_costs', 'sum_planes', 'sum_payments', 'sum_budget_category', 'categories_dif', 'budget', 'is_complate', 'savings'])
  },
  created(){
    this.$store.dispatch('getPlans')
    this.$store.dispatch('getPaymentsCurMonth')
    this.$store.dispatch('getCategory') 
    this.$store.dispatch('getSavings') 
       
  },
  data(){
    return {
      alert: false
    }
  },
  
  methods: {     
      dgclass(dg){
        return dg < 0 ? 'dgminus' : 'dgnormal'
      },
      close_period(){
        const curdate = new Date()
        const label = curdate.toLocaleDateString()
        const fact = this.sum_planes - (Math.abs(this.sum_costs) + this.sum_payments)
        const plan = this.budget - this.sum_budget_category
        
        
        this.$store.dispatch('addSaving', {label, fact, plan}).then(()=>{
          this.alert = false  
          this.$store.dispatch('clearPay')
        })

        
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