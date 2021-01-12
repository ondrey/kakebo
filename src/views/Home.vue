<template>
<div>


  

  <div class="plan" style="padding-bottom:5px">
   <div class="head_box" v-for="i in categories" :key="i.id">     
    <div :class="dgclass(i.dif)" v-html="i.dif.toLocaleString()"></div>
    <a href="#" class="linkpage">{{i.name}}</a>
    <div class="buttonplus">+</div>
  </div>
  </div>
      
  <div class="title">Расходы по категориям</div>
  
  
  <div class="plan">

    <div class="back back_jambo">
      
      <span style="font-size: small;">Остаток</span>
      <span>456 879</span>
      
      <span style="font-size: small;"> 43 121 Расход <br> 500 000 Бюджет  </span>
    </div>
    
    <div @click="nextStep" class="buttonplus" style="font-size: small; padding: 3px 25px;"> <span class="el-icon-refresh"></span> Закрыть период </div>
   

  </div>
  <div class="title">Итоги</div>


  
  <div class="plan">
    
    <div class="head_box">        
    <a href="#" class="linkpage" style="text-align:left">Обязательные расходы</a>    
    <span v-html="Number(15000).toLocaleString()" class="digiticon"></span>
    <span class="el-icon-date digiticon"></span>
    </div>

    <div class="head_box" style="padding-bottom:5px">    
    <a href="#" class="linkpage" style="text-align:left">Доходы</a>    
    <div v-html="Number(120000).toLocaleString()" class="digiticon"></div>
    <span class="el-icon-money digiticon"></span>
    </div>

    <div class="head_box" style="padding-bottom:5px">    
    <a href="#" class="linkpage" style="text-align:left">Бюджет по категориям</a>
    <div v-html="Number(105000).toLocaleString()" class="digiticon"></div>
    <span class="el-icon-s-operation digiticon"></span>
    </div>

  </div>
  <div class="title">Плановые платежи</div>


    
    <div class="head_box">
    <div @click="nextStep" class="buttonplus" style="font-size: small; padding: 3px 25px;"> <span class="el-icon-refresh"></span> Закрыть период </div>
    <div style="text-align:right">Осталось:</div>
    <div v-html="Number(15356).toLocaleString()" class="digiticon"></div>
    </div>    
    
    
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>    
    

    <div class="plan">
    <div class="buttonplus button" style="margin:5px"> <span class="el-icon-upload"></span> Отправить в облако </div>    
    <span><a href="kjm.su">kjm.su</a> - учет финансов</span>
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
        {name: 'Автомобиль', dif: 11000, id: 3},
        {name: 'Развлечения', dif: -5, id: 4},
        {name: 'Ремонт', dif: 456, id: 5}
      ]
    }
  },
  mounted(){
    this.datacollection = {
        labels: ['12.05.2020', '16.06.2020', '09.10.2020', '12.05.2020', '16.06.2020', '09.10.2020'],
        datasets: [
            {data: [-789, 11000, 5000, 44569, 35389]
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
