<template>
  <div class="plan">     

   <div class="head_box" v-for="row in list" :key="row">
    
    {{row}}
    
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
    created(){
        this.list = [
            {'21.02.2021': [
            {cat:'Категория', amount: 45.98, comment: 'Красткое описание если есть'}, 
            {cat:'Категория2', amount: 454.98, comment: 'Tесли есть'},
            {cat:'Категория3', amount: 600.00, comment: 'Красткое описание '}
            ]},
            {'22.02.2021': [
            {cat:'Категория', amount: 45.98, comment: 'Красткое описание если есть'}, 
            {cat:'Категория2', amount: 454.98, comment: 'Tесли есть'},
            {cat:'Категория3', amount: 600.00, comment: 'Красткое описание '}
            ]},
            {'23.02.2021': [
            {cat:'Категория', amount: 45.98, comment: 'Красткое описание если есть'}, 
            {cat:'Категория2', amount: 454.98, comment: 'Tесли есть'},
            {cat:'Категория3', amount: 600.00, comment: 'Красткое описание '}
            ]}            
            ]
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