<template>
  <div class="container">
    <div class="header-bg">
      <img src="./assets/images/header-bg.jpg">
    </div>
    <Navigation></Navigation>
    <router-view></router-view>
    <footer class="col-sm-12">
      <hr>
    </footer>
  </div>
</template>

<script>

import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>

h1:first-letter, h2:first-letter {
  text-transform:uppercase;
}
img{
  width: 100%;
}
</style>
