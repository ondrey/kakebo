<template>
  <div>
                <div class="plan" style="display: flex; justify-content: space-between; min-height:0">
                    <div class="back" style="width: 100%">
                        
                        <span style="padding: 3px;">
                            <span class="crimson_lite" style="font-size: xxx-large;">{{budget}}</span> <br>
                            <span style="font-size: small">Сумма бюджетных средств</span>
                        </span> 

                        <span style="padding: 3px; text-align: end;">
                            <span class="crimson_lite" style="font-size: xxx-large;">11300</span> <br>
                            <span style="font-size: small">Осталось</span>
                        </span>                         

                    </div>
                    <button class="buttonplus button_large" tabindex="5" style="color: forestgreen" 
                        @click="alert=!alert"> 
                    <span class="el-icon-circle-plus-outline buttoicon"></span> 
                    </button>
                </div>
                <div class="title">Бюджет</div>


                <alert :visible.sync="alert" title="Новая категория">
                    <div class="plan" style="margin-top: 1em;">
                    <div class="back">
                        <input type="text" v-model="cat_name" placeholder="Введите наименование категории">
                        <button class="buttonplus" style="width: 98px; color: crimson;">
                            <span class="el-icon-circle-plus-outline buttoicon"></span> Enter
                        </button>
                    </div>
                    
                    </div>
                    
                </alert>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Alert from '../components/alert'

export default {
    computed: {
        ...mapGetters(['budget']),        
    },
    components: {
        Alert
    },

    data(){
        return {
            alert: false,
            cat_name: ''
        }
    }

}
</script>

<style>

</style>