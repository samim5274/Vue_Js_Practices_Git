<template>
  <div class="login-page">    
    <div class="login-card">

      <!-- <div class="box" :class="{'box--right': moveToRight}"></div>
      <button @click="moveToRight=false">Move Left</button>
      <button @click="moveToRight=true" class="ml-4">Move Right</button>
      <hr> -->
      <!-- <Transition name="ShowHide">
        <div class="box1 mt-4" v-if="showing"></div>
      </Transition>
      <button @click="showing=!showing">Show / Hide</button> -->

      <div class="text-center">
        <img class="login-card__icon" src="/img/lock.png" alt="File not found">
        <h2>User login</h2>        
      </div>  
      <form action="#" @submit="handleSubmit">
          <label class="block ">Username</label>
          <input type="text" required v-model="formData.username" placeholder="Enter your username or username" ref="eamil">

          <label class="mt-3 block ">Password</label>
          <input type="password" required v-model="formData.password" placeholder="Enter your password" ref="password">

          <p class="text-center mt-3" v-if="loggingIn">Logging in...</p>
          <!-- <button type="submit" class="btn-login w-100 mt-4 block" v-else>Login</button> -->

          <TheButton :block="true" :loading="loggingIn" class="mt-3">Login</TheButton>

          <div class="d-flex jc-between mt-3">
            <div>
              <label>
                <input type="checkbox"> Remember Me
              </label>
            </div>
            <div>
              <a href="#">Forget password</a>
            </div>
          </div>
        </form>    
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TheButton from '../components/TheButton.vue';

export default{
  
  data:() => ({
    formData: {
        username: "",
        password: "",
      },
      loggingIn: false,
      moveToRight: false,
      showing: false
    }),

  methods:{
    handleSubmit(){
      console.log(this.formData);
      if(!this.formData.username){
        // alert("You need must be insert your username.");
        // TODO: show error message on test
        this.$eventBus.emit('toast', {
          type: "Error",
          message: "You need must be insert your username!"
        });
        this.$refs.username.focus();
        return;
      }
      if(this.formData.password.length < 8){
        // alert("Your password is least 8 charecters");
        // TODO: show error message on test
        this.$eventBus.emit('toast', {
          type: "Error",
          message: "Your password is least 8 charecters!"
        });

        this.$refs.password.focus();
        return;
      }
      
      this.loggingIn = true,

      axios
        .post(
          "https://api.rimoned.com/api/pharmacy-management/v1/login", 
          this.formData
        )
        .then((res) => {
          console.log(res.data);
          this.$eventBus.emit('toast', {
            type: "Success",
            message: res.data.message,
          });
        }).catch(err => {
          let errorMessage = "some thing is wrong!";
          if(err.response){
            errorMessage = err.response.data.message;
          }

          this.$eventBus.emit('toast', {
            type: "Error",
            message: errorMessage,
          });
        }).finally(() => {
          this.loggingIn = false;
        });

      console.log(this.formData);
    }
  },

  components: {
    TheButton
  }

}
</script>

<style>
.box {
  width: 55px;
  height: 55px;
  background-color: rgb(172, 255, 48);
  margin-bottom: 22px;
  transition: all 0.5s;
}

.box--right {
  margin-left: 222px;
}

.box1 {
  width: 55px;
  height: 55px;
  background-color: greenyellow;
  margin-bottom: 22px;
  /* animation: showhide 1s ease-in; */
}

.login-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 235, 235);
}

.login-card {
  width: 400px;
  /* border: 1px solid gray; */
  min-height: 193px;
  box-shadow: 0px 2px 9px 4px #dfdfdf;
  background-color: #fff;
  border-radius: 5px;
  padding: 44px 33px;
}

.login-card input[type="text"],
.login-card input[type="password"] {
  width: 100%;
}

.login-card__icon {
  max-width: 77px;
}

.btn-login{
  Padding: 5px;
  height: 2.5rem;
  font-size: 1rem;
  color: #ffffff;
  background: #049bff;
  border: none;
  border-radius: 5px;
}

@keyframes showhide {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.ShowHide-enter-active{
  animation: showhide 1s ease-in;
  /* transition: all 0.5s; */
}

.ShowHide-enter-from{
  /* opacity: 0;
  transform: scale(0.5); */
}

.ShowHide-enter-to{
  /* opacity: 1;
  transform: scale(1); */
}

.ShowHide-leave-active{
  animation: showhide 1s ease-in reverse;
  /* transition: all 0.5s; */
}

.ShowHide-leave-from{
  /* opacity: 1;
  transform: scale(1); */
}

.ShowHide-leave-to{
  /* opacity: 0;
  transform: scale(0.5); */
}

</style>
