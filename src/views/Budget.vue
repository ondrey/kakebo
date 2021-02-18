<template>
  <div>
                <div class="plan" style="min-height:0">
                    <div style="display: flex; justify-content: space-between;">
                        <button class="buttonplus button_large" tabindex="6" @click="$router.push('/')"> <span class="el-icon-caret-left buttoicon"></span> Отмена</button>

                        <button class="buttonplus button_large" 
                            @click="alert=!alert"> 
                            <span class="el-icon-circle-plus-outline buttoicon"></span> Добавить
                        </button>

                    </div>
                    
                    <div class="back">

                        <span style="padding: 3px;">
                            
                            <span style="font-size: small"><span class="crimson_lite">{{budget}}</span> После вычета обязательных платежей;</span> <br>
                            <span style="font-size: small"><span class="crimson_lite">{{sum_budget_category}}</span> Сумма по категориям.</span>
                            
                        </span> 

                        <span style="padding: 3px; text-align: end;">
                            <span style="font-size: small">План накоплений: <br>  <span style="font-size: xx-large;">{{budget - sum_budget_category}}</span></span>
                            
                        </span>
                    </div>
                    

                </div>
                <div class="title">Планирование расходов</div>

                <div v-for="cat in categories" :key="cat.id_cat">
                    <div class="plan" style="margin-top: 1em" >
                        <div style="display: flex; justify-content: space-between;">
                            <button 
                                class="buttonplus delbtn" 
                                style="margin-left: 5px;  margin-right: 5px;"
                                @click="delrec(cat.id_cat)"> 

                                <span class="el-icon-delete buttoicon"></span>
                            </button>

                            <div class="back" style="width:100%">
                                {{cat.name_cat}}
                                <span class="crimson_lite">{{cat.budget}}</span>
                            </div>

                        </div>
                        <el-slider :show-tooltip="false" style="margin: 0 1em 0 1em;" v-model="cat.budget" @change="change_budget(cat)"
                        :max="cat.budget+max_category_budget"
                        ></el-slider>
                        


                    </div>
                </div>

                <alert :visible.sync="alert" title="Новая категория">
                    <div class="plan" style="margin-top: 1em;">
                        <button class="buttonplus button_large" @click="alert=!alert"> <span class="el-icon-caret-left buttoicon"></span> Отмена</button>
                        <button class="buttonplus button_large" style="color: crimson;" @click="create_kakebo" 
                        v-show="categories.length==0"> 
                            <span class="el-icon-s-operation buttoicon"></span> Авто
                        </button>
                        <button class="buttonplus button_large" style="float: right;" :disabled="!Boolean(cat_name)" @click="add_category">
                            <span class="el-icon-circle-plus-outline buttoicon"></span> Добавить
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
        delrec(id){
            this.$store.dispatch('deleteCategory', id)
        },
        change_budget(data){            
            this.$store.dispatch('editBudget', data)
        },

        create_kakebo(){
            this.$store.dispatch('addCategories', {name_cat: 'Бытовые', budget: 0.0}).then(() => {
            this.$store.dispatch('addCategories', {name_cat: 'Культура и образование', budget: 0.0}).then(() => {
            this.$store.dispatch('addCategories', {name_cat: 'Развлечения', budget: 0.0}).then(() => {
            this.$store.dispatch('addCategories', {name_cat: 'Непредвиденные', budget: 0.0}).then(() => {
                this.alert = false
                this.$store.dispatch('getCategory')
            })})})})
            
        },

        add_category(){
            this.$store.dispatch('addCategories', {name_cat: this.cat_name, budget: 0.0}).then(() => {                                       
                this.cat_name = ''
                this.alert = false
                this.$store.dispatch('getCategory')
            })
            
        }
    }

}
</script>

<style>

</style>