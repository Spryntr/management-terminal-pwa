<template>
      <splash 
      splash="Group3"
      header_text="Log in as a manager"
      footer="Forgotten Password?"
      footer_high="Reset"
      >
      <div class="form w-1/2 mx-auto my-3">
          <div class="input my-3">
              <Input :label="mail" type="text"/>
          </div>
          <div class="input my-3">
           <Input :label="pass" type="password" />
          </div>
          <div class="submit mt-2">
            <Button innerText="Sign in"/>
          </div>
          
      </div>
      </splash>
      <div class="choose auth">
      </div>
</template>

<script>
import Input from '../components/input.vue'
import Splash from '../components/splash.vue'
import Button from '../components/submit_btn.vue'
export default {
 name: 'Login_manager',
 components: {Splash, Button, Input}
,
 data(){
     return {
         mail: "Email/Phone",
         pass: "Password"
     }
 }
}
</script>

<style>

</style>