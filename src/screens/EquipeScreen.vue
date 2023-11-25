<template>
    <div class="equipes-container">
        <div class="equipes-main">
            <div class="titulo-equipes">
                <h1>Equipe</h1>
            </div>
            <div class="nomes-container">
                <div class="nome-item">Nome 1</div>
                <div class="nome-item">Nome 2</div>
                <div class="nome-item">Nome 3</div>
                <div class="nome-item">Nome 4</div>
                <div class="nome-item">Nome 5</div>

            </div>
        </div>
    </div>
</template>

<style>
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

.titulo-equipes {
  margin-top: 20px;
  text-align: center;
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
</style>
