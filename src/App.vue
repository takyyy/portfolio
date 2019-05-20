<template>
  <div id="app">
    <Navber></Navber>
    <router-view/>
  </div>
</template>

<script>
  import Navber from './components/Navber'

  export default {
  name: 'App',
  components: {
    Navber
  },
}

</script>

<style>
html,
body {
  height: 100%;
  background-color:#333;
}
</style>
