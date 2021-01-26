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
                


                <div class="plan" >
                        
                        <div class="back" style="display: block; padding: 10px;">
                            <div class="listcost" v-for="i in arr" :key="i">
                                <button class="buttonplus" style="margin-left: 6px; color: currentcolor;"> <span class="el-icon-delete buttoicon"></span></button>
                                <span style="margin-left: 8px; width: 100%">За квартиру</span> 
                                <span class="crimson_lite">5444</span><strong>*</strong>
                            </div>
                        </div>
                                     
                </div>
                <div class="title"><strong>*</strong> - только для текущего месяца</div>



                <alert :visible.sync="alert" title="">
                <addform 
                    :form.sync="form"
                    title="Плановый платёж"             
                    >            

                    <button class="buttonplus button_large" tabindex="6" @click="alert=!alert"> <span class="el-icon-caret-left buttoicon"></span> Отмена</button>
                            
                    <div>                    
                        <button class="buttonplus button_large" tabindex="5"  :disabled="!Boolean(form.amount)"> 
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

export default {
    components:{
        Addform, Alert
    },
    data(){
        return {
            arr: new Array(4),
            alert: false,
            form:{
                amount: null,
                amount_date: new Date().toISOString().split('T')[0],
                amount_comment: ''
            }
        }
    }

}
</script>

<style>
.listcost {
    display: flex; justify-content: space-between; min-height:0; margin-top:12px;
}
</style>