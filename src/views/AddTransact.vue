<template>
  <div>

        
        <addform 
            :form.sync="form"
            :title="form.category.name"
            @enter="saveTransact" 
            @enter_shift="addGroupSave"
            >
                <button class="buttonplus button_large" tabindex="6" @click="$router.push('/')"> <span class="el-icon-caret-left buttoicon"></span> Отмена</button>
                <div>
                    <button class="buttonplus button_large" tabindex="4" @click="saveTransact"> <span class="el-icon-circle-check buttoicon"></span> Сохранить</button>
                    <button class="buttonplus button_large" tabindex="5" @click="addGroupSave"> <span class="el-icon-circle-plus-outline buttoicon"></span> В чек</button>
                </div>            
        </addform>

        <div class="title">Нажмите <span style="color:crimson;">Enter</span> чтобы сохранить. Или <span style="color:crimson;">Shift+Enter</span>, чтобы добавить в чек</div>


        <div class="plan"> 
            <div style="text-align: end;">
                <span class="chek_summ">653 руб.</span> <button class="buttonplus button_large" tabindex="4"> <span class="el-icon-circle-check buttoicon"></span> Сохранить чек</button>
            </div>
            
            <div class="back" style="display: block; padding: 1em;">                
                <div v-for="ch in cur_chek" :key="ch.id" class="chek_element"> {{ch.price}}  <span class="chek_text"> {{ch.text}} </span></div>                        
            </div>
                    
        </div>       



        <div class="title">Текущий чек</div>

  </div>
</template>

<script>
import Addform from "../components/addform";

export default {
    components:{
        Addform
    },

    data(){
        return {
            form:{
                amount: null,
                amount_date: new Date().toISOString().split('T')[0],
                amount_comment: '',
                category: {},
            },

            
            cur_chek: [{price: 115, text: 'Зубная паста', id: 1}, {price: 80, text: 'Морковь', id: 2}, {price: 458, text: 'Шампунь Шолдарс', id: 3},]
        }
    },
    created(){
        this.form.category = this.$route.params       
    },

    methods:{
        saveTransact(){
            console.log('save', this.form)
        },
        addGroupSave(){
            console.log('saveGroup')
        }
    }
}
</script>

<style>
.chek_summ {
    margin: 0.5em;
    font-size: x-large;
    text-align: end;
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