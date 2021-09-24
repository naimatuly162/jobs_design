<template>
  <div>
    <Header/>
    <Home></Home>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue"
import Home from "./Home.vue"

export default {
  name: 'Main',
  components: {
    Header, Footer, Home
  }
}
</script>