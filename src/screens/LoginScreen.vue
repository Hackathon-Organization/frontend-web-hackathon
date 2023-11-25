<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Nome de Usuário:</label>
          <input type="text" v-model="username" required />
        </div>
  
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" v-model="password" required />
        </div>
  
        <div class="form-group">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        console.log('Autenticação realizada:', { username: this.username, password: this.password });
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    text-align: center;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 15px;
    display: grid;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    padding: 8px;
    width: 250px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  
