<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CreateOrder msg="Welcome to Your Vue.js App"/>
    <PassInfo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import CreateOrder from './views/CreateOrder.vue';
import PassInfo from './views/PassInfo.vue';
import "jquery";
import "bootstrap";


export default {
  name: 'App',
  components: {
    CreateOrder,
    PassInfo
  }
}
</script>

<style >
 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
