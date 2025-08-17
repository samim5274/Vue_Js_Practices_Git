<template>
  <div class="app">
    <header>{{ msg }}</header>
    <div class="continer">
      <div class="tab">
        <div class="tab__menu">
          <div 
            v-for="tab in tabs" 
            :key="tab" 
            class="tab__menu-item" 
            :class="{'tab__menu-item--active': activeTab === tab}" 
            @click="activeTab = tab">
            {{ tab }}
          </div>          
        </div>
        <div class="tab__content">
            <br>
            <!-- <Login v-if="activeTab === 'Login'" />
            <Register v-if="activeTab === 'Register'" /> -->
            <keep-alive :is="activeTab">
              <component :is="activeTab" />
            </keep-alive>
          </div>
      </div>
    </div>
  </div>
</template>



<script>
import Login from './Login.vue';
import Register from './Register.vue';
import Contact from './Contact.vue';

export default {
  data(){
      return{
        msg: "Welcome to Vue Project",
        myComment: "",
        showDialog: false,
        notification: [],
        tabs: ["Login", "Register", "Contact"],
        activeTab: "login",
        name: "Shamim HossaiN",
        website: "https://shamim.deegau.com",
        address: "Dhaka, Banglades"
      };
  },

  methods:{
    handleClicl(){
      console.log("clicked");
    }
  },

  provide(){
    return {
      name: this.name,
      websiteAddress: this.website,
      address: this.address
    }
  },

  components: {
    Login, Register, Contact,
  },    
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
    font-size: 2.5rem;
    padding: 1.9rem;
    text-align: center;
    font-weight: bold;
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

  .tab {
    margin: 10px;
    padding: 0;
    font-family: "Segoe UI", Arial, sans-serif;
  }

  .tab__menu {
    display: flex;
    gap: 6px;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 6px;
  }

  .tab__menu-item {
    padding: 8px 18px;
    background: #f5f5f5;
    border-radius: 6px 6px 0 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #555;
    transition: all 0.3s ease;
  }

  .tab__menu-item:hover {
    background: #e0e0e0;
    color: #222;
  }

  .tab__menu-item--active {
    background: #4a148c;
    color: #fff;
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  }

  input {
    padding: 10px 14px;
    margin-top: 12px;
    margin-bottom: 16px;
    width: 100%;
    max-width: 320px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    transition: border 0.2s, box-shadow 0.2s;
  }

  input:focus {
    border-color: #4a148c;
    box-shadow: 0 0 4px rgba(74,20,140,0.4);
  }

  .tab__content {
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-top: none; /* menu এর সাথে seamless look */
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  font-size: 14px;
  color: #333;
  transition: all 0.3s ease;
}

.tab__content h3 {
  margin-top: 0;
  color: #4a148c;
  font-size: 18px;
}

.tab__content p {
  line-height: 1.6;
  margin-bottom: 10px;
}

/* Optional: fade-in animation when content changes */
.tab__content-enter-active, 
.tab__content-leave-active {
  transition: opacity 0.3s ease;
}
.tab__content-enter, 
.tab__content-leave-to {
  opacity: 0;
}



  /* 45 video ses */
</style>
