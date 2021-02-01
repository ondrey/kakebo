<template>
  <div>
                <div class="plan" style="min-height:0">
                    <div class="back">
                        
                        <span style="padding: 3px;">
                            <span class="crimson_lite" style="font-size: xx-large;">{{budget}}</span> <br>
                            <span style="font-size: small">Сумма бюджетных средств</span>
                        </span> 

                        <span style="padding: 3px; text-align: end;">
                            <span class="crimson_lite" style="font-size: xx-large;">{{budget - sum_budget_category}}</span> <br>
                            <span style="font-size: small">Осталось</span>
                        </span>                         


                    </div>
                    
                    <div style="text-align: end">
                        <button class="buttonplus button_large" tabindex="5" style="color: forestgreen;  " 
                            @click="alert=!alert"> 
                            <span class="el-icon-circle-plus-outline buttoicon"></span> 
                        </button>
                    </div>
                    

                </div>
                <div class="title">Распределите бюджет по категориям</div>


                <div class="plan" style="margin-top: 1em" v-for="cat in categories" :key="cat.id_cat">
                    <div class="back">
                        {{cat.name_cat}}
                        <span class="crimson_lite" style="font-size: x-large;">{{cat.budget}}</span>
                        </div>

                    <el-slider :show-tooltip="false" style="margin: 0 1em 0 1em;" v-model="cat.budget" @change="change_budget(cat)"
                    :max="max_category_budget"
                    ></el-slider>

                </div>



                <alert :visible.sync="alert" title="Новая категория">
                    <div class="plan" style="margin-top: 1em;">
                        <button class="buttonplus button_large" @click="alert=!alert"> <span class="el-icon-caret-left buttoicon"></span> Отмена</button>
                        
                        <button class="buttonplus button_large" style="float: right;" :disabled="!Boolean(cat_name)" @click="add_category">
                            <span class="el-icon-circle-plus-outline buttoicon"></span> Сохранить
                        </button>

                        <div class="back">
                            <input type="text" v-model="cat_name" placeholder="Введите наименование категории">                        
                        </div>                    
                    
                    </div>
                    
                </alert>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';

import Alert from '../components/alert'


export default {
    computed: {
        ...mapGetters(['budget', 'sum_budget_category', 'max_category_budget']), 
        ...mapState(['categories'])
    },
    components: {
        Alert
    },

    data(){
        return {
            alert: false,
            cat_name: ''
        }
    },
    created(){
        this.$store.dispatch('getPlans')
        this.$store.dispatch('getCategory')
    },
    methods:{
        change_budget(data){            
            this.$store.dispatch('editBudget', data)
        },

        add_category(){
            this.$store.dispatch('addCategories', {name_cat: this.cat_name, budget: 0.0}).then(() => {                                       
                this.cat_name = ''
                this.alert = false              
            })
        }
    }

}
</script>

<style>

</style>