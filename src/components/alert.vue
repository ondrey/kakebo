<template>
<transition name="bounce">
    <div class="infobable" v-if="visible">
    <div style="font-size: x-large;">{{title}}</div>
    <slot></slot>
    <div @click="visible=false" class="buttonplus" style="padding: 5px; margin-top: 11px;"><span class="el-icon-circle-check  buttoicon" ></span>{{button_text}}</div>
    </div>
</transition>
    
</template>

<script>
export default {
    props:['button_text', 'visible', 'title'],
    
}
</script>

<style>
.infobable {
    display: block;
    position: fixed;
    top: 0px;
    background-color: #ececec;
    left: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 0px 0px 6px 6px;
    padding-top: 32px;
    box-shadow: 0px 9px 4px #828282;
    color: crimson;
    font-size: small;
    text-align: center;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>