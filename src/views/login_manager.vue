<template>
      <splash 
      splash="Group3"
      header_text="Log in as a manager"
      footer="Forgotten Password?"
      footer_high="Reset"
      >
      <div class="form">
          <Input/>
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
}
</script>

<style>

</style>