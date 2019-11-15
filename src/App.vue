<!--  Global Template -->
<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>
<script>

//Import Components (Header, Content)
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
//Export  default App
export default {
  name: 'app',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<!-- Import Styles General -->
<style>
  @import './assets/css/styles.css';
</style>
