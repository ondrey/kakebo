<template>
  <div class="plan" style="padding-bottom:5px" v-on:keyup.enter="submit">

            <div style="    display: flex; justify-content: space-between; min-height: 0 !important;">
            <slot></slot>                
            </div>
        
            <div class="back">
                <div style="margin: 0.5em; width: 100%; color: crimson;">Добавить в категорию "{{title}}"</div>
                <input type="date" style="text-align: end;" id="amount_date" v-model="formshow.amount_date" tabindex="1" autocomplete="off" @input="onInput">
            </div>
            
            <div class="back" style="display: block;">
                <input type="number" v-model="formshow.amount" 
                id="amount" style="text-align:center; font-size: xxx-large;" tabindex="2" autofocus  placeholder="Стоимость" autocomplete="off" @input="onInput">
                <hr>
                <input type="text" style="text-align: center;"  v-model="formshow.amount_comment" id="amount_comment" tabindex="3" placeholder="Ваш комментарий" autocomplete="off" @input="onInput"/>
            </div>
                        
        </div>
</template>

<script>
export default {
    props: ['form', 'title'], 
    data(){
        return {
            formshow: {
                amount_date: this.form.amount_date,
                amount: this.form.amount,
                amount_comment: this.form.amount_comment
            }
        }
    },
    methods:{
        onInput() {
            this.$emit('update:form', this.formshow)
        },
        submit(event){            
            if (event.shiftKey) {
                this.$emit('enter_shift')
            } else {
                this.$emit('enter')
            }
        }
    }

}
</script>

<style>

</style>