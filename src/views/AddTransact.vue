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
            <textarea  v-model="amount_comment" id="amount_comment" tabindex="2" placeholder="Ваш комментарий"></textarea>
        </div>
        
        
            
        </div>
        <div class="title">Нажмите <span style="color:crimson;">Enter</span> для регистрации транзакции.</div>
        <div class="plan" style="    display: flex; justify-content: space-between; min-height: 0 !important;">
            <div class="buttonplus button_large" style="color: crimson;"> <span class="el-icon-circle-check buttoicon"></span> Добавить и завершить</div>
            <div class="buttonplus button_large"> <span class="el-icon-circle-plus-outline buttoicon"></span> Добавить ещё</div>
        </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            amount: 100,
            amount_date: new Date().toISOString().split('T')[0],
            amount_comment: ''
        }
    },


}
</script>

<style>

</style>