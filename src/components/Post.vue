<template>
  <main class="blog">
      <Blogs></Blogs>
  </main>
</template>

<script>

import Blog from '@/components/Blog'

export default {
  name: 'blogs',
  components: {
    'Blog': Blog
  }
}
</script>
