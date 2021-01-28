<template>

    <div>
                

                <div class="plan" style="display: flex; justify-content: space-between; min-height:0">
                    <div class="back" style="width: 100%">
                        
                        <span style="padding: 3px;">
                            <span class="crimson_lite">48 963</span> <br>
                            <span style="font-size: small">Сумма по обязательным платежам</span> 
                        </span>

                    </div>
                    <button class="buttonplus button_large" tabindex="5" style="color: forestgreen" 
                        @click="alert=!alert"> 
                    <span class="el-icon-circle-plus-outline buttoicon"></span> 
                    </button>
                </div>
                <div class="title">Добавить платёж</div>
                


                <list :delete_show="true" :list="list"></list>

                <div class="title"><strong>*</strong> - только для текущего месяца</div>



                <alert :visible.sync="alert" title="">
                <addform 
                    :form.sync="form"
                    title="Плановый платёж" 
                    @enter="add_plan"            
                    >            
                    <button class="buttonplus button_large" tabindex="6" @click="alert=!alert"> <span class="el-icon-caret-left buttoicon"></span> Отмена</button>
                            
                    <div>                    
                        <button class="buttonplus button_large" tabindex="5"  :disabled="!Boolean(form.amount)" @click="add_plan">
                            <span class="el-icon-circle-plus-outline buttoicon"></span> Сохранить
                        </button>
                    </div>
                </addform>
                </alert>

                
        
    </div>

  
</template>

<script>
import Addform from "../components/addform"
import Alert from '../components/alert'
import List from "../components/historylist";

export default {
    components:{
        Addform, Alert, List
    },
    data(){
        return {    
            list: [
            {amount_date: '12.05.1998', amount: 356.45, amount_comment: 'Крот средство для канализации', category_name: 'Хоз. Расходы', mark: true, id: 0},
            {amount_date: '11.05.1998', amount: 200, amount_comment: 'Зубная паста', category_name: 'Хоз. Расходы', mark: false, id: 1},
            {amount_date: '10.05.1998', amount: 10000.98, amount_comment: 'Кварплата', category_name: 'Комунальные платежи', mark: true, id: 2}
            ],
            alert: false,
            
            form: {
                amount_date: new Date().toISOString().split('T')[0],
                amount: null,
                amount_comment: ''
            }
        }
    },
    methods:{
        add_plan() {
            this.$store.dispatch('addPlans', this.form).then(() => {
                this.form.amount = ''
                this.form.amount_comment = ''
                this.form.amount_date = new Date().toISOString().split('T')[0]
                this.alert = false     
            })            
                    
        }
    }

}
</script>

<style>

</style>