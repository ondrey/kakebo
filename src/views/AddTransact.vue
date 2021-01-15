<template>
  <div>
        <div class="plan" style="padding-bottom:5px">
        
        

        <div class="back">    
            <div class="h2">Продукты</div>
            <input type="date" style="text-align: end;" id="amount_date" v-model="amount_date" tabindex="3">
        </div>
        
        
        <div class="back" style="display: block;">    
            <input type="number" v-model="amount" id="amount" style="text-align:center" tabindex="1" placeholder="Стоимость">
            <hr>
            <input type="text" style="text-align: center;"  v-model="amount_comment" id="amount_comment" tabindex="2" placeholder="Ваш комментарий" />
        </div>
        
        
            
        </div>
        <div class="title">Нажмите <span style="color:crimson;">Enter</span> чтобы сохранить и закрыть форму.</div>
        <div class="plan" style="    display: flex; justify-content: space-between; min-height: 0 !important;">
            <button class="buttonplus button_large"> <span class="el-icon-circle-plus-outline buttoicon"></span> Ещё</button>
            <button class="buttonplus button_large"> <span class="el-icon-circle-check buttoicon"></span> Сохранить и завершить</button>
            
        </div>
        <div class="title">Нажмите <span style="color:crimson;">Shift+Enter</span>, чтобы сохранить и добавить еще.</div>


        <div class="back" style="display: block; padding: 1em;">
            <div class="chek_summ">653 руб.</div>
            <div v-for="ch in cur_chek" :key="ch" class="chek_element"> {{ch.price}}  <span class="chek_text"> {{ch.text}} </span></div>            
        </div>
        <div class="title">Текущий чек</div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            amount: null,
            amount_date: new Date().toISOString().split('T')[0],
            amount_comment: '',
            cur_chek: [{price: 115, text: 'Зубная паста', id: 1}, {price: 80, text: 'Морковь', id: 2}, {price: 458, text: 'Шампунь Шолдарс', id: 3},]
        }
    },


}
</script>

<style>
.chek_summ {
    margin-bottom: 1em;
    font-size: x-large;
    text-align: center;
}
.chek_element {
    margin-bottom: 6px;
    display: flex; justify-content: space-between;
}

.chek_text {
    width: 100%;
    text-align: end;
    border-bottom-style: dashed;
    border-bottom-width: thin;
}
</style>