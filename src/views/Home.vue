<template>
<div>


  <div class="title">Расходы по категориям</div>

  <div class="plan" style="padding-bottom:5px">
   <div class="head_box" v-for="i in categories" :key="i.id">
    <div :class="dgclass(i.dif)" v-html="i.dif.toLocaleString()"></div>
    <a href="#" class="linkpage">{{i.name}}</a>
    <div class="buttonplus">+</div>
  </div>
  </div>

  <div class="title">Планы</div>
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
    <div class="title">Накопления</div>
    <div class="head_box">
    <div @click="nextStep" class="buttonplus" style="font-size: small; padding: 3px 25px;"> <span class="el-icon-refresh"></span> Закрыть период </div>
    <div style="text-align:right">Осталось:</div>
    <div v-html="Number(15356).toLocaleString()" class="digiticon"></div>
    </div>    
    
  <div class="small">
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
            {
              label: 'Накопления',              
              data: [-789, 11000, 5000, 44569, 35389]
            }, 
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
.title {
    font-size: x-large;
    text-align: end;
    font-weight: 700;
    color: #98e0ac;
    margin: 5px;
}
.head_box {
  justify-content: space-between;
  display: flex;
  margin: 1em;
}

.maxidigit {
  font-size: x-large;
}
.plan{
    width: 100%;
    min-height: 64px;
    /*background-color:#85ca98;*/
    background: rgb(151,224,171);
    background: linear-gradient(180deg, rgb(154 214 171) 0%, rgb(133 202 152) 100%);
    box-shadow: 1px 1px 3px #00000042, -1px -1px 3px #ffffff9e;
    border-radius: 5px;
    padding-top: 5px;   
    padding-bottom: 5px; 
}

.buttonplus {
    background: linear-gradient(180deg, rgb(154 214 171) 0%, rgb(133 202 152) 100%);
    box-shadow: 1px 1px 3px #00000042, -1px -1px 3px #ffffff9e;
    border-radius: 5px;
    padding-left: 4px;
    padding-right: 4px;
    
    cursor: pointer;
}
.buttonplus:active {
  color: white;
  box-shadow: none;
}

.linkpage {
    color: #ffffff;
    width: 100%;
    text-align: end;
    margin-right: 10px;
    border-bottom-style: dotted;
    border-bottom-width: thin;
    text-decoration: none;
}

.dgminus {
  color: brown;
}

.dgnormal {
  color: white;
}

.digiticon {
  
  font-size: large;
  margin: 0px 2px;
}

</style>
