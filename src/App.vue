<template>
  <div id="app">
    <navbar/>
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Layout/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
}
</style>
