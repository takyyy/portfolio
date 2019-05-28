<template>
  <div id="app">
    <Navber></Navber>
    <transition mode=”out-in”>
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navber from './components/Navber'
  import Footer from './components/Footer'

  export default {
  name: 'App',
  components: {
    Navber,
    Footer
  },
}

</script>

<style>
html {
  height: 100%;
  background-color: #ECEFF1
}

#app {
  background-color: #ECEFF1
}

.v-enter-active, .v-leave-active {
  transition: opacity .4s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.card{
    background-color: #FAFAFA
}
</style>
