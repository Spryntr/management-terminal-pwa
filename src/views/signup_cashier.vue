<template>
     <splash splash="Group8"
     header_text="Sign Up"
     >
      <Input label="Email" type="email"/>
      <Input label="Phone Number" type="tel"/>
      <Input label="Password"  type="password"/>
      <Button innerText="Sign Up"/>
     </splash>
</template>

<script>
import Input from '../components/input.vue'
import Splash from '../components/splash.vue'
import Button from '../components/submit_btn.vue'
export default {
  components: {Splash, 
   Input, Button
  }
}
</script>

<style>

</style>