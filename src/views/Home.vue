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


  <div class="title">Итоги</div>
    
    <div class="plan">
      
      

      <div class="steklo" style="width:210px"> 
      <div class="head_box "><div>Остаток</div><div>74 550,00 р.</div></div>
      <div class="head_box "><div>Расходы</div><div>25 450,00 р.</div></div>
      <div class="head_box "><div>Бюджет</div><div>100 000,00 р.</div></div>
      </div>

      
    </div>
  <div class="title">Планы</div>
  <div class="plan"></div>
    
    
    

</div>
  
</template>

<script>
export default {
  data(){
    return {
      categories: [
        {name: 'Продукты', dif: 456, id: 1},
        {name: 'Хоз товары', dif: 0, id: 2},
        {name: 'Автомобиль', dif: 11000, id: 3},
        {name: 'Развлечения', dif: -5, id: 4},
        {name: 'Ремонт', dif: 456, id: 5}
      ]
    }
  },
  methods:{
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
}

.buttonplus {
    background: linear-gradient(180deg, rgb(154 214 171) 0%, rgb(133 202 152) 100%);
    box-shadow: 1px 1px 3px #00000042, -1px -1px 3px #ffffff9e;
    border-radius: 5px;
    padding-left: 4px;
    padding-right: 4px;
    font-weight: 700;
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

.steklo {
    border-style: inset;
    border-width: thin;
    border-radius: 4px;
    padding: 3px;
    /*background-color: #75bb88;*/
    background: linear-gradient(180deg, rgba(255,255,255,0.21052170868347342) 0%, rgb(0 0 0 / 15%) 100%);

    color: #d3f9de;
}

</style>
