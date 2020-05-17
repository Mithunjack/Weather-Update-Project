<template>
  <div>
    <Header></Header>
    <Form @clicked="onClickPrediction" :response = "show"></Form>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Form from "./components/Form";
  import Footer from "./components/Footer";
  //import axios from "axios";
  export default {
    name: 'App',
    components: {
      Footer,
      Form,
      Header
    },
    data(){
      return {
        show : false,
      }
    },
    methods: {
      onClickPrediction(value){
        console.log("form paise: " + value.time.time);
        /*axios.post('#',value)
                .then(res => this.todos = [...this.todos , res.data])
                .catch(err => console.log(err));*/
        this.show = true;
      }
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