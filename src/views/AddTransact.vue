<template>
  <div>
        <div class="plan" style="padding-bottom:5px">

        <label for="amount_date">Дата платежа:</label>        
        <input type="date" id="amount_date" v-model="amount_date">
        
        
        <label for="amount">Цена:</label>
        <div class="back">    
            <input type="number" v-model="amount" id="amount" style="text-align:center">
        </div>
        <label for="amount_comment">Комментарий:</label>
        <div class="back">
            <textarea  v-model="amount_comment" id="amount_comment"></textarea>
        </div>
            
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