<template>
  <div>
    <Header></Header>
    <Form></Form>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Form from "./components/Form";
  import Footer from "./components/Footer";
  export default {
    name: 'App',
    components: {
      Footer,
      Form,
      Header
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url("./assets/image2.jpg");
    background-color: #cccccc;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  body{
    margin: 0;
    padding: 0;
  }
</style>