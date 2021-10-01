<template>
  <div class="wrap">
      <Splash splash="Group1"/>
      <div class="choose auth">
           <h2>Log in</h2>
           <div class="buttons">
               
           </div>
      </div>
  </div>
</template>

<script>
import Splash from '../components/splash.vue'
export default {
name: 'Login',
components:{
   Splash
}
}
</script>

<style>
.choose{
    position: absolute;
    width:40%;
    right: 0%;
}
</style>