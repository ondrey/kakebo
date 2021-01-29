<template>
  <div>
    <el-slider v-model="value0" :max="value2/2"></el-slider> 
    <el-slider v-model="value1" :max="value2/2"></el-slider>
    <el-slider v-model="value2" :max="1000"></el-slider>
    {{value1}} из {{value2}}
  </div>
</template>

<script>
export default {
    data(){
        return {
            value0: 0,
            value1: 0,
            value2: 0
        }
    }

}
</script>

<style>

</style>