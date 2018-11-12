<template>
  <div class="col-sm-12">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="'/'">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
      </ol>
    </nav>
    <h1 class="text-center">{{ title }}</h1>
    <paginate
      name="blogs"
      :list="posts"
      :per="12"
      tag="div" class="row">
      <section v-for="blog in paginated('blogs')" class="col-sm-12 col-md-6 col-lg-3">
        <div class="post-view">
          <img v-bind:src="source" />
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.body }}</p>
          <router-link :to="'/post/' + blog.id" class="btn btn-more">Lire la suite</router-link>
        </div>
      </section>
    </paginate>

    <paginate-links
      for="blogs"
      :async="true"
      :show-step-links="true"
      :step-links="{
        next: 'Next',
        prev: 'Previous'
      }"
      :classes="{
        'ul': 'pagination',
        'ul > li': 'page-item',
        'ul > li > a': 'page-link',
      }"
    >
    </paginate-links>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "Liste des blog",
      source: 'http://thumb7.shutterstock.com/display_pic_with_logo/2892448/342092249/stock-vector-cool-comic-book-bubble-text-pop-art-retro-style-342092249.jpg',
      posts: [],
      paginate: ['blogs']
    }
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/posts")
      .then(response => response.json(), error => console.log(error))
      .then(json => this.posts = json, error => console.log(error));
  }
}
</script>

<style>
h2{
  font-size: 16px;
  line-height: 19px;
  color: #1d1d1d;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.btn-more{
  background: none;
  padding: 5px 0;
  color: #1d1d1d;
  border: 0;
}
p{
  font-family: "Helvetica",sans-serif;
    font-size: 13px;
    font-size: .8125rem;
    line-height: 18px;
    color: #3d4652;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
