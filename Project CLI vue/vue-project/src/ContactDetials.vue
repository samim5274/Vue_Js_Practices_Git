<template>
    <div class="contact-details">
      <h1 class="header">Contact Details</h1>
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Website:</strong> {{ websiteAddress }}</p>
      <p><strong>Address:</strong> {{ address }}</p>
      <p><strong>Phone:</strong> {{ phone }}</p>
    </div>
</template>

<script>
  export default {
    props:{
      name:{
        type: String,
      }, 
      websiteAddress:{
        type:String,
        required: false,
        default: "https://shamim.deegau.com"        
      }, 
      address:{
        type: String,
        required: true
      }, 
      phone:Number
    },
    data(){
        return {}
    }
  }
</script>

<style scoped>
  .contact-details{
    border: 1px solid gray;
    margin: 11px 22px;
    padding: 22px;
    text-align: start;
  }
  .header{
    font-size: 2.5rem;
    color: #2c3e50;
  }
</style>