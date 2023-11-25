<template>
  <div class="user-profile">
    <div class="user-info">
      <div class="titulo-equipes">
        <h2 header-text>Nome do Usuário</h2>
      </div>
      <div class="info-text">
        <p>Email:</p>
        <p>Telefone:</p>
        <p>Data de Nascimento:</p>
      </div>
      <div class="info-text">
        <p>Pontuação:</p>
        <p>Equipe:</p>
        
      </div>
    </div>
  </div>
  <div class="botao-voltar">
    <router-link to="/"><button class="voltar">Voltar</button></router-link>
  </div>
</template>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2[header-text] {
  margin-bottom: 20px;
}

.info-text {
  background-color: #012030;
  color: #fff;
  border-radius: 10px;
  width: 400px;
  padding: 10px;
  font-size: 20px;
  margin-top: 20px;
  line-height: 1.5;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #012030;
  color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
}
.botao-voltar {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.voltar {
  height: 50px;
  width: 200px;
  font-size: 16px;
  background-color: #012030;
  color: #fff;
  border-radius: 15px;
  transition: background-color 0.3s;
}

.voltar:hover {
  background-color: #75d1ff;
  color: #012030;
  border-radius: 15px;
  color: #fff;
}
</style>
