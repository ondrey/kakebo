<template>
  <div style="padding:12px 8px 8px 12px;">
    <router-view/>    
  </div>
</template>

<script>
export default {
    data(){
        return {
            current_account: 'Счет кредитной карты'
        }
    }

}
</script>

<style>

</style>