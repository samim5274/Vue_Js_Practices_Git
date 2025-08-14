<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <contact-details></contact-details>
  </div>
</template>

<script>
  export default {
    data(){
        return{
            msg: "welcome to vue project"
        };
    },

    methods:{}
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
