<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloVue />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HelloVue from './components/HelloVue.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
