<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import Loading from 'vue-loading-overlay';

const participantes = ref([])
const isLoading=ref(false)

onMounted(async () => {
  isLoading.value = true
  const response = await api.get('/participantes');
  participantes.value = response.data.results
  isLoading.value = false
});


</script>

<template>
  <loading :active="isLoading" :can-cancel="true" is-full-page="false" loader="bars"/>
  <div class="notas-container">
    <div class="notas-main">
      <div class="titulo-notas">
        <h1>Notas</h1>
      </div>
      <div class="botao-voltar">
        <router-link to="/"><button class="voltar">Voltar</button></router-link>
      </div>
      <div class="nomes-container">
        <div class="nome-item" v-for="participantes in  participantes" :key="participantes.id"><h2> {{participantes.nome}}</h2> <h3>Nota: </h3>{{participantes.pontuacao}}</div>
      </div>
      <div class="botao-avaliar">
      </div>
    </div>
  </div>
</template>

<style>
.notas-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.notas-main {
  width: 800px;
  color: #fff;
  background-color: #012030;
  border-radius: 30px;
  overflow: hidden;
  margin-top: 10px;
}

.titulo-notas {
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

</style>
