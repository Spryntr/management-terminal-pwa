<template>
   <div class="wrap">
       <div class="logo image_small">
          <img src="@/assets/logo.svg" alt="">
       </div>
       <div class="splash_graphic">
           <div class="img">
               <img :src="splash" alt="">
           </div>
       </div>
   </div>
</template>

<script>
export default {
name: "splash",
props:{
    name: 'splash',
    type: String
}
}
</script>

<style lang="scss" scoped>
 .wrap{
     width:60%;
     background:#121417;
 }
</style>