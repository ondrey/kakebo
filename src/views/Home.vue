<template>
<div>


  

  <div class="plan" style="padding-bottom:5px">
   <div class="head_box" v-for="i in categories" :key="i.id">     
    <div :class="dgclass(i.dif)" v-html="i.dif.toLocaleString()"></div>
    <a href="#" class="linkpage">{{i.name}}</a>
    <div class="buttonplus"><span class="el-icon-circle-plus-outline buttoicon"></span></div>
  </div>
  </div>
      
  <div class="title">Расходы по категориям</div>
  
  
  <div class="plan">

    <div class="back back_jambo">
      
      <span style="font-size: small;">Остаток</span>
      <span>456 879</span>
      
      <span style="font-size: small;"> 43 121 Расход <br> 500 000 Бюджет  </span>
    </div>

    <div @click="nextStep" class="buttonplus button_close_period"> <span class="el-icon-refresh buttoicon"></span> Закрыть период </div>
   

  </div>
  <div class="title">Итоги</div>


  
  <div class="plan">
    
    <div class="head_box">        
    <a href="#" class="linkpage" style="text-align:left">Обязательные расходы</a>    
    <div class="back" style="margin:0px">
      <span v-html="Number(15000).toLocaleString()" class="digiticon"></span>
      <span class="el-icon-date digiticon"></span>
    </div>
    </div>

    <div class="head_box" style="padding-bottom:5px">    
    <a href="#" class="linkpage" style="text-align:left">Доходы</a>    
    <div class="back" style="margin:0px">
      <div v-html="Number(120000).toLocaleString()" class="digiticon"></div>
      <span class="el-icon-money digiticon"></span>
    </div>
    </div>

    <div class="head_box" style="padding-bottom:5px">    
    <a href="#" class="linkpage" style="text-align:left">Бюджет по категориям</a>
    <div class="back" style="margin:0px">
      <div v-html="Number(105000).toLocaleString()" class="digiticon"></div>
      <span class="el-icon-s-operation digiticon"></span>
    </div>
    
    </div>

  </div>
  <div class="title">Плановые платежи</div>



    <div>
      <line-chart :chart-data="datacollection"></line-chart>
    </div>
    
    

</div>
  
</template>

<script>
import LineChart from '../components/chart'


export default {
  components: {
      LineChart
  },  
  data(){
    return {
      datacollection: null,
      categories: [
        {name: 'Продукты', dif: 456, id: 1},
        {name: 'Хоз товары', dif: 0, id: 2},
        {name: 'Автомобиль', dif: 500, id: 3},
        {name: 'Развлечения', dif: -500, id: 4},
        {name: 'Ремонт', dif: 456, id: 5}
      ]
    }
  },
  mounted(){
    this.datacollection = {
        labels: ['12.05', '16.06', '09.10', '12.05', '16.06', '09.10'],
        datasets: [
            {data: [-789, -300, -456, 0, 123, 250]
            ,label: 'Накопления'}, 
          ]
      }
  },
  methods: {
      nextStep(){
        this.datacollection.label.push('08.11.2020')
        this.datacollection.datasets.data.push(40000)

      },
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