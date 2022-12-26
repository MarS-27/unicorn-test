<template>
    <header class="header">
        <h1 class="header__title">SHOP</h1>
        <NavBar />
    </header>
</template>
  
<script>
    import NavBar from '@/components/NavBar';

    export default {
        components: {
            NavBar,
        }
    }
</script>

<style lang='scss' scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        border-bottom: 2px solid #6e6e6e;;
    }

    .header__title {
        font-size: 50px;
        font-style: italic;
    }
</style>