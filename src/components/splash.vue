<template>
<div class="wrap_splash">
       <div class="logo image_small">
          <img src="@/assets/logo.svg" alt="">
       </div>
       <div class="splash_graphic">
           <div class="img">
               <img :src="require(`@/assets/${splash}.svg`)" alt="">
           </div>
       </div>
</div>
<div class="choose auth">
           <div class="enter">
               <h2>{{header_text}}</h2>
               <slot></slot>
           </div>
           <div class="signup">
               <p>{{footer}} <span class="highlight">{{footer_high}}</span></p>
           </div>
</div>
   
</template>

<script>
export default {
name: "splash",
props:['splash', 'header_text', 'footer', 'footer_high']
}
</script>

<style lang="scss" >
 .wrap_splash{
     width:60%;
     position: absolute;
     bottom: 0px;
     top:0px;
     left:0px;
     background:#121417;
     .logo{
        width: 17%;
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
 .choose{
    position: absolute;
    width:40%;
    text-align: center;
    right: 0%;
    .enter{
      width: 100%;
      padding: 15% 0px;
      h2{
        font-weight: bold;
       font-size: 1.5em;
       word-spacing: 2px;
       margin:20px 0px;
      }
    }
}
.signup{
  p{
    font-weight: 700;
    word-spacing: 2px;
  }
}
.highlight{
  color:#ab0519;
}
</style>