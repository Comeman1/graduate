<template>
  <div id="app">

    <test></test>
    <router-view/>
    <bottom class="bottom"></bottom>
  </div>
</template>

<script>
import test from './components/test'

import bottom from '@/components/bottomNav/bottom'
export default {
  name: 'App',
  components:{
    bottom,
    test
  }
}
</script>

<style>
a{
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515151;
  /* margin-top: 60px; */
}
*{
  margin:0;
  padding:0;
}
ul,li{
  list-style-type: none;
}
</style>
