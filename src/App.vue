<template>
  <div class="container">
    <Headertemplate></Headertemplate>
    <Navigation></Navigation>
    <router-view></router-view>
    <footer class="col-sm-12">
      <hr>
    </footer>
  </div>
</template>

<script>
import Headertemplate from './components/Headertemplate'
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'Headertemplate': Headertemplate,
  }
}
</script>

<style lang="scss">
@import './assets/sass/app';
</style>
