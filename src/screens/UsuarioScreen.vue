<template>
    <div class="user-profile">
      <h2>Perfil do Usuário</h2>
      <div class="user-info">
        <div class="user-header">
          <p>Nome:</p>
        </div>
        <div class="info-text">
          <p>Email:</p>
          <p>Pontuação:</p>
          <p>Times:</p>
          <p>Telefone:</p>
          <p>Data de Nascimento:</p>
        </div>
      </div>
      <button>Logout</button>
    </div>
  </template>
  <style scoped>
  .user-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
h2 {
    margin-bottom: 20px;
}
  
.user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}
  
.user-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
  
img {
    border-radius: 50%;
    margin-right: 20px;
}
  
.info-text {
    text-align: left;
}
  
button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>
  
