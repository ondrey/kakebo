<template>
  <div style="padding:12px 8px 8px 12px;">
    <div style="display: flex;justify-content: space-between;padding-bottom: 15px;font-family: system-ui; font-size: small; color: darkgray;">
      <span> <span class="el-icon-s-home"></span> <a href="/" class="linkpage">KJM</a> - учёт затрат, главная</span> 
      <span> <a href="#/about" class="linkpage">О программе</a> </span> 
    </div> 

    <router-view/> 
  </div>
</template>

<script>

export default {
    data(){
        return {
            
        }
    }

}
</script>

<style>

.h2 {
    text-align: end;    
    margin: 0.5em;
    font-size: x-large;
    color: crimson;
}

label {
    font-size: small;
    margin-left: 15px;
}

input, textarea {
    color: #006382;
    border-style: none;
    font-size: larger;
    background-color: #00ffff00;
    width: 100%;
}


.title {
    font-size: small;
    text-align: end;
    margin-bottom: 3em;
    margin-top: 0.4em;
}
.head_box {
  justify-content: space-between;
  display: flex;
  margin: 1em;
}

.maxidigit {
  font-size: x-large;
}
.plan{
    width: 100%;
    min-height: 64px;    
    background: linear-gradient(180deg, rgb(218 218 218) 0%, rgb(206 206 206) 100%);
    box-shadow: 1px 1px 3px #00000042, -1px -1px 3px #ffffff9e;
    border-radius: 5px;
    padding-top: 5px;   
    padding-bottom: 5px; 
}
.back { 
    justify-content: space-between;
    display: flex;   
    background-color: #cfe1e6;    
    border-radius: 6px;
    padding: 3px;
    margin: 4px;
    box-shadow: inset -1px -1px 1px rgb(255 255 255 / 59%), inset 1px 1px 1px rgb(0 0 0 / 15%);
}

.back_jambo {
    text-align: center;
    font-family: monospace;
    font-size: x-large;
}

.buttonplus {
    background: linear-gradient(180deg, rgb(208 208 208) 0%, rgb(191 191 191) 100%);
    box-shadow: 1px 1px 3px #00000042, -1px -1px 3px #ffffff9e;
    border-radius: 5px;
    padding-left: 4px;
    padding-right: 4px;    
    cursor: pointer;
}

.button_large {
    margin: 10px;
    padding: 5px;
}

.buttoicon {
    font-size: small;
    font-weight: bold;
}

.button {font-size: small; padding: 3px 25px;}
.buttonplus:active {
  color: #8a8a8a;
  box-shadow: none;
}

.linkpage {
    color: #797979;
    width: 100%;
    text-align: end;
    margin-right: 10px;
    border-bottom-style: dotted;
    border-bottom-width: thin;
    text-decoration: none;
}

.dgminus {
  color: crimson;
  font-size: small;
}

.dgnormal {    
    font-size: small;
}

.digiticon {    
  margin: 0px 2px;
  font-size: small;
}

</style>
