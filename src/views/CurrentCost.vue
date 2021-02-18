<template>

    <div>
                
          
                
                <addform 
                    :form.sync="form"
                    title="Плановый платёж" 
                    :hidden_dateinput="true"
                    @enter="add_plan"            
                    >            
                    <button class="buttonplus button_large" tabindex="6" @click="$router.push('/')"> <span class="el-icon-caret-left buttoicon"></span> Отмена</button>
                            
                    <div>                    
                        <button class="buttonplus button_large" tabindex="5"  :disabled="!Boolean(form.amount)" @click="add_plan">
                            <span class="el-icon-circle-plus-outline buttoicon"></span> Добавить
                        </button>
                    </div>
                </addform>
                <div class="title" v-show="sum_costs!=0">Ежемесячные расходы <span style="color: crimson;">{{ sum_costs.toLocaleString() }}</span></div>


                <list :delete_show="true" :list="plans_cost" @delete_record="delete_plan" v-show="sum_costs!=0">
                            <template v-slot="slotProps">
                                <span style="padding-left: 5px;">
                                    <div style=" width: max-content;">{{slotProps.row.amount_comment}}</div> 
                                </span>
                                <span 
                                    style="margin-right: 8px; width: 100%; text-align: end;">                        
                                    <div class="crimson_lite">{{slotProps.row.amount.toLocaleString()}}</div>                                                                                 
                                </span>   
                            </template>
                            

                </list>

                





                
        
    </div>

  
</template>

<script>
import { mapGetters } from 'vuex';

import Addform from "../components/addform"

import List from "../components/historylist"

export default {    
    components:{
        Addform, List
    },

    computed: {
        ...mapGetters(['plans_cost', 'sum_costs'])
    },

    data(){
        return {                  
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