<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import Loading from 'vue-loading-overlay';

const equipes = ref([]);
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  const response = await api.get('/equipes');
  equipes.value = response.data.results;
  isLoading.value = false;
});

</script>

<template>
  <loading :active="isLoading" :can-cancel="true" is-full-page="false" loader="bars"/>
  <div class="equipes-container">
  
    <div class="equipes-main">
      <router-link to="/"><button class="voltar">Voltar</button></router-link>
      <div class="titulo-equipes">
        <h1>Equipes</h1>
      </div>
      
      <div class="nomes-container">
        <div class="nome-item" v-for="equipe in equipes" :key="equipe.id">
          <h3>{{ equipe.nome }}</h3>
        </div>
      </div>
      <div v-if="equipeSelecionada">
        <h2>Detalhes da Equipe</h2>
        <div class="detalhes-equipe">
          <div v-for="membro in equipeSelecionada.membros" :key="membro.id" class="membro-item">{{ membro.nome }}</div>
        </div>
      </div>
      <div class="botao-avaliar">
        <router-link to="/">
          <router-link to="/inscricao"><button class="avaliar">Adicionar Equipes</button></router-link>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.voltar {
   height: 50px;
   width: 200px;
   margin-top: 10px;
   margin-left: 10px;
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
  max-height: 400px; 
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
  height:50px;
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
