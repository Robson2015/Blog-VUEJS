<template>
  <div class="menu">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-for="routes in links"  v-bind:key="routes.id" class="nav-item">
            <router-link :to="`${routes.page}`" class="nav-link">{{routes.text}}</router-link>
            </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/Home'
        },
        // {
        //   id: 1,
        //   text: 'About',
        //   page: '/About'
        // },
        {
          id: 2,
          text: 'Contact',
          page: '/Contact'
        },
        {
          id: 4,
          text: 'Actus',
          page: '/Post'
        },
      ]
    }
  }
}
</script>

<style>
.bg-light {
    background-color:rgba(0, 0, 0, 0.6)!important;
}
.navbar-light .navbar-nav .nav-link {
    color:#fff;
}
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover{
  color:red;
}
</style>
