<template>
 <div class="wrap">
    <div class="logo">
       <img src="@assets/logo.svg" alt="">
    </div>
    <nav>
        <ul class="list-menu">
            <li class="list_item_menu">In-Store</li>
            <li class="list_item_menu">Orders</li>
            <li class="list_item_menu">Summary</li>
            <li class="list_item_menu">Settings</li>
        </ul>
    </nav>
 </div>
</template>

<script>
export default {
name:'Navbar'
}
</script>

<style lang="scss" scoped>
 .wrap{
     background: #191716;
     padding:15px;
;
 }
</style>