<template>
    <div class='navbar'>
        <RouterLink class='navbar__link' active-class="active-page" to='/'>Products</RouterLink>
        <RouterLink class='navbar__link' active-class="active-page" to='/about'>About</RouterLink>
    </div>
</template>
  
<script>
    export default {
    }
</script>
  
<style lang='scss' scoped>
    .navbar__link {
        padding: 8px 12px;
        text-align: center;
        border-radius: 8px;
        font-size: 18px;
        border: none;
        background-color: #dcdcdc;
        text-decoration: none;
        color: #2d3333;

        &:first-of-type {
            margin-right: 10px;
        }
        
        &:hover {
            background-color: #7dd3fc;
        }
    }

    .active-page {
        background-color: #7dd3fc;
    }
</style>