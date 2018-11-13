<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="'/'">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
      </ol>
    </nav>
    <h1>Contact Me</h1>
    <p>
      <ul>
        <li>Email: {{email}}</li>
        <li>Website: {{web}}</li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title:'contact',
      email: 'ror@esokia.com',
      web: 'www.roresokia.com'
    }
  }
}
</script>
