<script setup>
import Axios from 'axios';
import { reactive } from 'vue';

const equipe = reactive({
  nome: '',
  membro1: '',
  membro2: '',
  membro3: '',
  membro4: '',
  membro5: '',
  membro6: '',
});

const adicionarEquipe = async () => {
  try {
    const response = await Axios.post('http://0.0.0.0:19003/api/equipes/', equipe);
    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    console.error('Erro ao adicionar equipe:', error);
  }
};
</script>


<template>
  <div class="equipes-container">
    <div class="equipes-main">
      <div class="titulo-equipes">
        <h1>Equipe</h1>
        <input v-model="equipe.nome" class="equipe-input" placeholder="Nome da Equipe">
      </div>
      <div class="botao-voltar">
        <router-link to="/"><button class="voltar">Voltar</button></router-link>
      </div>
      <div class="nomes-container">        
          <input v-model="equipe.membro1" class="nome-item" placeholder="Nome 1">        
          <input v-model="equipe.membro2" class="nome-item" placeholder="Nome 2">        
          <input v-model="equipe.membro3" class="nome-item" placeholder="Nome 3">        
          <input v-model="equipe.membro4" class="nome-item" placeholder="Nome 4">        
          <input v-model="equipe.membro5" class="nome-item" placeholder="Nome 5">        
          <input v-model="equipe.membro6" class="nome-item" placeholder="Nome 6">        
      </div>
      <div class="botao-adicionar">
        <button class="adicionar" @click="adicionarEquipe">Confirmar</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.equipes-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.equipes-main {
  height: 600px;
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
  margin-top: 40px; 
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

.botao-adicionar {
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding-top: 10px;
}

.adicionar {
  height: 50px;
  width: 200px;
  font-size: 16px;
  background-color: #75d1ff;
  color: #fff;
  border-radius: 15px;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.avaliar:hover {
  background-color: #012030;
  color: #012030;
  border-radius: 15px;
  color: #fff;
}
.equipe-input {
  width: 60%;
  padding: 10px;
  margin-top: 10px;
  font-size: 20px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
}
</style>
