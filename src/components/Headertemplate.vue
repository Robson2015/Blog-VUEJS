<template>
  <div class="header">
    <h1>{{ msg }}</h1>
    <img src="../assets/images/header-bg.jpg" alt="" class="bg-head">
  </div>
</template>

<script>
export default {
  name: 'Headertemplate',
  data () {
    return {
      msg: 'Vue JS bolg by ror@esokia.com',
    }
  }
}

</script>


