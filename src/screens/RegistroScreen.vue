<template>
    <div class="registration-form">
      <h2>Cadastro</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="user.email" required />
        </div>
  
        <div class="form-group">
          <label for="name">Nome:</label>
          <input type="text" v-model="user.name" required />
        </div>
  
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" v-model="user.password" required />
        </div>
  
        <div class="form-group">
          <label for="confirmPassword">Confirmar Senha:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
  
        <div class="form-group">
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          email: '',
          name: '',
          password: '',
        },
        confirmPassword: '',
      };
    },
    methods: {
      register() {
        if (this.user.password === this.confirmPassword) {
          console.log('Registro bem-sucedido:', this.user);
        } else {
          console.error('As senhas não coincidem.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .registration-form {
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
  }
  
  label {
    margin-top: 10px;
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
