<template>
  <div class="app">
    <div class="container">
      <h1>new user Registration</h1>
      <label>Ful Name</label><br>
      <input type="text" placeholder="Enter your full name" v-model="formData.fullName">
      <br>
      <label>About Me</label><br>
      <textarea v-model="formData.aboutYou" placeholder="Write something about you..."></textarea>
      
      <label>Gender</label><br>
      <label><input type="radio" name="gender" value="Male" v-model="formData.gender"> Male</label>
      <label><input type="radio" name="gender" value="Female" v-model="formData.gender" class="ml-2" checked> Female</label>
      <label><input type="radio" name="gender" value="Other" v-model="formData.gender" class="ml-2"> Other</label><br>

      <label>Language</label><br>
      <select v-model="formData.language">
        <option value="" disabled> --Select language-- </option>
        <option value="Bangla">Bangla</option>
        <option value="English">English</option>
        <option value="Arabic">Arabic</option>
        <option value="Hindi">Hindi</option>
      </select><br><br>

      <label>Skills</label>
      <select multiple v-model="formData.skills">
        <option value="Bangla">HTML</option>
        <option value="English">CSS</option>
        <option value="Arabic">JavaScript</option>
        <option value="Hindi">C#</option>
        <option value="Hindi">Python</option>
      </select><br><br>


      <label>Agreement</label><br>
      <label><input type="checkbox" v-model="formData.agreed"> I agree to the Terms and Condition</label><br><br>

      <label>Social Account</label><br>
      <label><input type="checkbox" value="FB" v-model="formData.socialAccounts"> Facebook</label>
      <label><input type="checkbox" value="TW" v-model="formData.socialAccounts" class="ml-2"> Twitter</label>
      <label><input type="checkbox" value="INS" v-model="formData.socialAccounts" class="ml-2"> Instragram</label>
      <label><input type="checkbox" value="LN" v-model="formData.socialAccounts" class="ml-2"> LinkedIn</label><br>
      <br><br><hr><br><br>

      <div v-for="(value, key) in formData" :key="key"><strong>{{ key }}</strong>: {{ value }} </div>
    </div>
  </div>
</template>


<script>


  export default {
    data(){
        return{
          msg: "Vue 3 Project practices CLI and VITE js",
          name: "",
          formData: {
            fullName : "Md. ",
            aboutYou: "About me...",
            gender: "Female",
            language: "",
            skills: [],
            agreed: false,
            socialAccounts: []
          },
        };
    },

    mounted(){},

    methods:{},

    components: {},    
  }
</script>


<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    line-height: 1.8;
    text-align: justify;
  }

  header{
    background: #37008f;
    color:aqua;
    font-size: 1.9rem;
    padding: 1.9rem;
  }

  ul{
    margin-left: 2rem;
  }

  header h3{
    text-align: center;
  }
  .shadow{
    box-shadow: 0 0 3px #85f7ff;
  }
  .container{
    padding: 2rem;
  }

  input{
    padding: 5px 11px;
    margin-bottom: 11px;
  }

  textarea{
    padding: 10px;
    border: 1px solid #a0a0a0;
    border-radius: 5px;
    width: 100%;
    height: 80px;
  }

  .ml-2{
    margin-left: 11px;
  }

  /* 50 video ses */
</style>
