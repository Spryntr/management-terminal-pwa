<template>
    <div class="wrap">
      <splash splash="Group7"
       header_text="Log in as a Cashier"
        footer="Forgotten Password?"
      footer_high="Reset">
      
       <div class="submit mt-2">
             <Input :label="code"  type="text" />
             <Input :label="pass"  type="password"/>
            <Button innerText="Sign in"/>
          </div>
      </splash>
     
  </div>
</template>

<script>
import Input from '../components/input.vue'
import Splash from '../components/splash.vue'
import Button from '../components/submit_btn.vue'
export default {
name: 'Login Cashier',
components:{Splash, Button, Input},

data(){
  return {
    code: 'Cashier Code',
    pass: 'Password'
  }
}
}
</script>

<style>

</style>