<template>
  <!-- Registration Form Template -->
<div class="register-container">
  <h2>Register</h2>
  <form class="register-form">
    <label for="name">Full Name</label>
    <input type="text" id="name" placeholder="Enter your full name" required>

    <label for="email">Email Address</label>
    <input type="email" id="email" placeholder="Enter your email" required>

    <label for="password">Password</label>
    <input type="password" id="password" placeholder="Enter password" required>

    <label for="confirm-password">Confirm Password</label>
    <input type="password" id="confirm-password" placeholder="Confirm password" required>

    <button type="submit">Register</button>

    <p class="login-link">
      Already have an account? <a href="#">Login</a>
    </p>
  </form>
</div>

</template>

<script lang="ts" setup>

</script>

<style>
/* Registration Form Styles */
body {
  font-family: "Segoe UI", Arial, sans-serif;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-container {
  background: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}

.register-container h2 {
  text-align: center;
  color: #4a148c;
  margin-bottom: 25px;
}

.register-form label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #333;
}

.register-form input {
  width: 100%;
  padding: 10px 14px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
}

.register-form input:focus {
  border-color: #4a148c;
  box-shadow: 0 0 4px rgba(74,20,140,0.3);
}

.register-form button {
  width: 100%;
  padding: 12px;
  background: #4a148c;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.register-form button:hover {
  background: #37008f;
}

.register-form .login-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.register-form .login-link a {
  color: #4a148c;
  text-decoration: none;
  font-weight: 500;
}

.register-form .login-link a:hover {
  text-decoration: underline;
}

</style>