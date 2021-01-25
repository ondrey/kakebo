<template>
  <div class="plan">     

   <div class="head_box" v-for="row in list" :key="row.id">     
    
    <div class="buttonplus"><span class="el-icon-delete buttoicon"></span></div>
    <div v-html="row.amount.toLocaleString()"></div>
    <span class="linkpage">{{row.category}}</span>
    
  </div>

  </div>
</template>

<script>
export default {
    props:['list', 'delete_show'],
    data(){
        return {
            btn_del: this.delete_show,
        }
    },
    methods:{
        del_record(id){
            this.$emit('delete_record', id)
        }
    }
}
</script>

<style>

</style>