<template>
  <div class="equipes-container">
    <div class="equipes-main">
      <div class="titulo-equipes">
        <h1>Equipe</h1>
      </div>
      <div class="botao-voltar">
        <router-link to="/"><button class="voltar">Voltar</button></router-link>
      </div>
      <div class="nomes-container">
        <div class="nome-item">Nome 1</div>
        <div class="nome-item">Nome 2</div>
        <div class="nome-item">Nome 3</div>
        <div class="nome-item">Nome 4</div>
        <div class="nome-item">Nome 5</div>
        <div class="nome-item">Nome 6</div>
      </div>
      <div class="botao-avaliar">
        <router-link to="/">
          <router-link to="/inscricao"><button class="avaliar">Inscrever Mais Equipes</button></router-link>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.equipes-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.equipes-main {
  width: 800px;
  color: #fff;
  background-color: #012030;
  border-radius: 30px;
  overflow: hidden;
  margin-top: 10px;
}

.titulo-equipes {
  margin-top: 20px;
  text-align: center;
}

.botao-voltar {
  position: absolute;
  top: 10px;
  left: 10px;
}

.voltar {
  height: 50px;
  width: 200px;
  font-size: 16px;
  background-color: #75d1ff;
  color: #fff;
  border-radius: 15px;
  transition: background-color 0.3s;
}

.voltar:hover {
  background-color: #012030;
  color: #012030;
  border-radius: 15px;
  color: #fff;
}

.nomes-container {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  overflow-y: auto;
  color: #000;
  text-align: center;
}

.nome-item {
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  font-size: 20px;
  background-color: #fff;
}

.botao-avaliar {
  margin-top: 20px;
  text-align: center;
}

.avaliar {
  height: 50px;
  width: 200px;
  font-size: 16px;
  background-color: #75d1ff;
  color: #fff;
  border-radius: 15px;
  transition: background-color 0.3s;
}

.avaliar:hover {
  background-color: #012030;
  color: #012030;
  border-radius: 15px;
  color: #fff;
}
</style>
