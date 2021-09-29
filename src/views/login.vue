<template>
  <div class="wrap">
      <Splash/>
  </div>
</template>

<script>
export default {
name: 'Login',
components:{
    Splash: ()=> import('../components/splash.vue')
}
}
</script>

<style>

</style>