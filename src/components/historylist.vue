<template>
    <div class="plan" >
            
            <div class="back" style="display: block; padding: 10px;">
                <div  v-for="row in list" :key="row.id">
                      
                    <div class="listcost">
                        <button class="buttonplus delbtn" v-show="btn_del" @click="del_record(row.id)"> <span class="el-icon-delete buttoicon"></span></button>
                        <slot v-bind:row="row">
                            <span style="padding-left: 5px;">
                                <div>{{row.category_name}}</div>
                                <div style="font-size:small; width: max-content;">{{row.amount_date}}<strong v-show="row.mark">*</strong></div> 
                            </span>
                            <span 
                                style="margin-right: 8px; width: 100%; text-align: end;">                        
                                <div class="crimson_lite">{{row.amount}}</div>                        
                                <div style="font-size:small">{{row.amount_comment}}</div>                        
                            </span>   
                        </slot>                        
                    </div>
                    <hr />
                </div>
            </div>
                            
    </div>
</template>

<script>
export default {
    props:['list', 'delete_show'],
    data(){
        return {
            btn_del: this.delete_show || false
        }
    },
    
    methods:{
        del_record(id){
            console.log(id, '!!!!')
            this.$emit('delete_record', id)
        }
    }
}
</script>

<style>
.listcost {
    display: flex; justify-content: flex-start; min-height:0; margin-top:12px;
}
.delbtn {
    margin-left: 6px; margin-right: 4px; color: currentcolor; height: fit-content;
}
</style>