<template>
  <div class="equipes-container">
    <div class="equipes-main">
      <div class="titulo-equipes">
        <h1>Equipe</h1>
      </div>
      <div class="nomes-container">
        <div class="div-avaliar">Nome</div>
        <div class="div-avaliar">Nome</div>
        <div class="div-avaliar">Nome</div>
        <div class="div-avaliar">Nome</div>
        <div class="div-avaliar">Nome</div>
        <div class="div-avaliar">Nome</div>

        <div class="div-avaliar">
          <router-link to="/avaliacao">
            <button class="avaliar">Avaliar</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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

.nomes-container {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  overflow-y: auto;
  color: #fff;
  text-align: center;
  max-height: 400px;
}

.div-avaliar {
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  font-size: 20px;
  background-color: #012030;
}

.equipes-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.equipes-main {
  height: 500px;
  width: 800px;
  color: #fff;
  background-color: #012030;
  border-radius: 30px;
  overflow: hidden;
  margin: auto;
}
</style>
