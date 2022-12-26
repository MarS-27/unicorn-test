<template>
  <div class='container'>
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header';

  export default {
    components: {
      Header,
    }
  }
</script>

<style lang='scss'>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #dcdcdc;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #2d3333;
    
  }
</style>