<template>
   <div class="wrap">
       <div class="logo image_small">
          <img src="@/assets/logo.svg" alt="">
       </div>
       <div class="splash_graphic">
           <div class="img">
               <img :src="require(`@/assets/${splash}.svg`)" alt="">
           </div>
       </div>
   </div>
</template>

<script>
export default {
name: "splash",
props:['splash']
}
</script>

<style lang="scss" scoped>
 .wrap{
     width:60%;
     position: absolute;
     bottom: 0px;
     top:0px;
     left:0px;
     background:#121417;
     .logo{
        width: 20%;
        margin:40px 70px;
        img{
         width: 100%;
        }
    }
    .splash_graphic{
          .img{
              width:55%;
              margin:30px auto;
              img{
                  width:100%;
              }
          }
    }
 }
</style>