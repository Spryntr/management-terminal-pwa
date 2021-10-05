<template>
      <splash splash="Group1" header_text="Log In" footer="Don’t have an account?" footer_high="Sign Up" >
             <div class="btn">
               <router-link :to="{name: 'Login Manager'}">
                  <button class="btn1">
                     <div class="img"> <img src="../assets/icons/manager_vector.svg"></div>
                     <div class="btntext">Manager</div>
               </button>
               </router-link>
              <router-link tag="li" :to="{name: 'Login Cashier'}">
                <button class="btn2">
                   <div class="img"><img src="../assets/icons/cashier_vector.svg"></div>
                    <div class="btntext">
                     Cashier
                   </div>
                   </button>
              </router-link>
               
             </div>
      </splash>
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

<style lang="scss" scoped>
   .btn{
         margin: 20% 0px;
        button{
          border-radius:12px;
          width:40%;
          display: flex;
          font-size: 1.2em;
          align-items: center;
          font-weight: bold;
          margin:33px auto;
          justify-content: space-around;
          padding:15px 25px;
          .img{
            width: 20px;
            img{
              width: 100%;
            }
          }
        }
        .btn1{
          background: #ab0519;
          color: white;
        } 
       .btn2{
         border: 2px solid #ab0519;
         color: #ab0519;    
        .img{
         width: 25px;
        }
      }
   }
</style>