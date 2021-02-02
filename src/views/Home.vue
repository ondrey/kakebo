<template>
<div>

  <div class="plan" style="padding-bottom:5px">
   <div class="head_box" v-for="i in categories" :key="i.id">     
    <div :class="dgclass(i.dif)" v-html="i.dif.toLocaleString()"></div>
    <a href="#" class="linkpage">{{i.name}}</a>
    <div @click="$router.push({ name: 'New', params: i })" class="buttonplus"><span class="el-icon-circle-plus-outline buttoicon"></span></div>
  </div>
  </div>
      
  <div class="title">Расходы по категориям</div>
  
  
  <div class="plan">

    <div class="back back_jambo">
      
      <span style="font-size: small;">Остаток</span>
      <span>456 879</span>
      
      <span style="font-size: small; text-align: end;"> 43 121 Расход <br> 500 000 Бюджет  </span>
    </div>

    <div class="buttonplus button_close_period" @click="alert = !alert"> <span class="el-icon-refresh buttoicon"></span> Закрыть период </div>
   

  </div>
  <div class="title">Итоги</div>


  
  <div class="plan">
    
    <div class="head_box">        
    <a href="#/current-cost" class="linkpage" style="text-align:left">Обязательные расходы</a>    
      <span v-html="sum_costs" class="digiticon"></span>      
      <span class="el-icon-date digiticon"></span>
    </div>

    <div class="head_box" style="padding-bottom:5px">    
    <a href="#/current-income" class="linkpage" style="text-align:left">Доходы</a>
      <div v-html="sum_planes" class="digiticon"></div>
      <span class="el-icon-money digiticon"></span>
    </div>

    <div class="head_box" style="padding-bottom:5px">    
    <a href="#/budget-cat" class="linkpage" style="text-align:left">Категории</a>
      <div v-html="budget" class="digiticon"></div>
      <span class="el-icon-s-operation digiticon"></span>
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
    ...mapGetters(['sum_costs', 'sum_planes']),
    ...mapGetters(['budget'])
  },
  created(){
    this.$store.dispatch('getPlans')
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
      categories: [
        {name: 'Продукты', dif: 456, id: 1},
        {name: 'Хоз товары', dif: 0, id: 2},
        {name: 'Автомобиль', dif: 500, id: 3},
        {name: 'Развлечения', dif: -500, id: 4},
        {name: 'Ремонт', dif: 456, id: 5}
      ]
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