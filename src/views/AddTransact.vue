<template>
  <div>

        
        <addform 
            :form.sync="form"
            :title="$route.params.name"
            @enter="saveTransact" 
            >
                <button class="buttonplus button_large" tabindex="6" @click="$router.push('/')"> <span class="el-icon-caret-left buttoicon"></span> Назад</button>
                <div>                    
                    <button class="buttonplus button_large" tabindex="5" @click="saveTransact" v-show="form.amount"> 
                        <span class="el-icon-circle-plus-outline buttoicon"></span> Ещё
                    </button>
                </div>
        </addform>

        <div class="title">Нажмите <span style="color:crimson;">Enter</span> чтобы добавить еще.</div>

        
            
        <div class="plan" v-show="chek.length">
            <div class="head_box" v-for="ch in chek" :key="ch.id">     
            <div v-html="ch.amount.toLocaleString()"></div>
            <span class="linkpage">{{ch.amount_comment}}</span>
            </div>
        </div>

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
                category: null
            },
            chek: []
        }
    },
    created(){
        if ('name' in this.$route.params) {
            this.form.category = this.$route.params
        } else {
            this.$router.push({ name: 'Home' })
        }
    },

    methods:{
        saveTransact(){

            this.$store.dispatch('addPayments', {...this.form, category: this.$route.params}).then(() => {
                const res = {id: this.chek.length, ...this.form}            
                this.chek.unshift(res)
                this.form.amount = ''
                this.form.amount_comment = ''  
            })
            
        
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