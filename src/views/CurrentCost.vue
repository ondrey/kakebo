<template>

    <div>
                

                <div class="plan" style="display: flex; justify-content: space-between; min-height:0">
                    <div class="back" style="width: 100%">
                        
                        <span style="padding: 3px;">
                            <span style="font-size: small">Стоимость обязательных платежей</span> <br>
                            <span style="font-size: xx-large;">{{ sum_costs }}</span> 
                            
                        </span>

                    </div>
                    <button class="buttonplus button_large" tabindex="5" style="color: forestgreen" 
                        @click="alert=!alert"> 
                    <span class="el-icon-circle-plus-outline buttoicon"></span> 
                    </button>
                </div>
                <div class="title">Добавить платёж</div>
                


                <list :delete_show="true" :list="plans_cost" @delete_record="delete_plan" v-show="sum_costs!=0">
                            <template v-slot="slotProps">
                                <span style="padding-left: 5px;">
                                    <div style="font-size:small; width: max-content;">{{slotProps.row.amount_comment}}</div> 
                                </span>
                                <span 
                                    style="margin-right: 8px; width: 100%; text-align: end;">                        
                                    <div class="crimson_lite">{{slotProps.row.amount}}</div>                                                                                 
                                </span>   
                            </template>
                            

                </list>

                <div class="title" v-show="sum_costs!=0">Ежемесячные расходы</div>



                <alert :visible.sync="alert" title="">
                <addform 
                    :form.sync="form"
                    title="Плановый платёж" 
                    :hidden_dateinput="true"
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
import { mapGetters } from 'vuex';

import Addform from "../components/addform"
import Alert from '../components/alert'
import List from "../components/historylist"

export default {    
    components:{
        Addform, Alert, List
    },

    computed: {
        ...mapGetters(['plans_cost', 'sum_costs'])
    },

    data(){
        return {
            alert: false,            
            form: {
                amount_date: new Date().toISOString().split('T')[0],
                amount: null,
                amount_comment: ''
            }
        }
    },
    created(){
        this.$store.dispatch('getPlans')
    },
    methods:{
        add_plan() {
            this.$store.dispatch('addPlans', {...this.form, cost: true}).finally(()=>{
                this.form.amount = ''
                this.form.amount_comment = ''
                this.form.amount_date = new Date().toISOString().split('T')[0]
                this.alert = false
                this.$store.dispatch('getPlans')
            })
                    
        },
        delete_plan(id){            
            this.$store.dispatch('deletePlan', id)
        }
    }

}
</script>

<style>

</style>