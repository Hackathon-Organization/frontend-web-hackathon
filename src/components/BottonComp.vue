<template>
  <div class="button-container">
    <router-link to="/equipe"> <button class="custom-button">Equipes</button></router-link>
    <router-link to="/inscricao"> <button class="custom-button">Inscrição</button></router-link>
    <router-link to="/avaliacao"> <button class="custom-button">Avaliação</button></router-link>
    <router-link to="/nota"> <button class="custom-button">Notas</button></router-link>
    
  </div>
</template>

<style scoped>
.custom-button {
  height: 50px;
  width: 200px;
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #012030;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
}

.custom-button:hover {
  background-color: #75d1ff;
  color: #012030;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}
</style>
    