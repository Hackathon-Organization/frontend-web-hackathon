<script setup>
import { ref, onMounted, watch } from 'vue'
import api from '@/plugins/axios'

const equipes = ref([])
const equipeSelecionada = ref(null)
const avaliacaoAtual = ref(null)

onMounted(async () => {
  try {
    const response = await api.get('/equipes')
    equipes.value = response.data.results
  } catch (error) {
    console.error('Erro ao carregar equipes:', error)
    alert('Ocorreu um erro ao carregar as equipes. Por favor, tente novamente.')
  }
})

watch(equipeSelecionada, (novaEquipeSelecionada) => {
  equipes.value =
    novaEquipeSelecionada?.equipes?.map((equipe) => ({ nome: equipe.nome, nota: 0 })) || []
})

function selecionarEquipe(equipe) {
  equipeSelecionada.value = equipe
}

async function confirmarAvaliacao() {
  if (equipeSelecionada.value) {
    try {
      await api.patch(`/equipes/${equipeSelecionada.value.id}/`, { nota: avaliacaoAtual.value })
      avaliacaoAtual.value = null
      alert('Avaliações confirmadas!')
    } catch (error) {
      console.error('Erro ao enviar avaliações:', error)
      alert('Ocorreu um erro ao enviar as avaliações. Por favor, tente novamente.')
    }
  } else {
    alert('Por favor, selecione uma equipe antes de confirmar a avaliação.')
  }
}
</script>

<template>
  <div class="equipes-container">
    <div class="equipes-main">
      <router-link to="/">
        <button class="voltar">Voltar</button>
      </router-link>
      <div class="titulo-equipes">
        <h1>Equipe</h1>
      </div>

      <div class="nomes-container equipe">
        <div
          v-for="equipe in equipes"
          :key="equipe.id"
          class="nome-item"
          @click="selecionarEquipe(equipe)"
        >
          {{ equipe.nome }}
        </div>
      </div>
      <div v-if="equipeSelecionada" class="nomes-container membros">
        <div v-for="equipe in equipes" :key="equipe.id" class="membro-item">
          <div class="nome">{{ equipe.nota }}</div>
          <input type="number" class="avaliacao" placeholder="Pontuação" v-model="equipe.nota" />
        </div>
        <div class="input-avaliar">
          <input type="number" class="avaliar" placeholder="Avaliação" v-model="avaliacaoAtual" />
        </div>
        <div class="botao-avaliar">
          <button class="avaliar" @click="confirmarAvaliacao">Confirmar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background: radial-gradient(circle, #012030 0%, #010101 100%);
}

.equipes-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.equipes-main {
  height: 550px;
  width: 800px;
  color: #fff;
  background-color: #012030;
  border-radius: 30px;
  overflow: hidden;
  margin: auto;
  position: relative;
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
  margin-top: 20px;
  color: #000;
  text-align: center;
}

.nomes-container.equipe {
  max-height: 300px;
  overflow-y: auto;
}

.nomes-container.membros {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.nome-item {
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  font-size: 20px;
  background-color: #fff;
}

.membro-item {
  width: calc(33.33% - 20px);
  box-sizing: border-box;
  margin-bottom: 10px;
}

.nome {
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  font-size: 20px;
  background-color: #fff;
}

.avaliacao {
  color: #012030;
  width: 80px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 5px;
  font-size: 16px;
}

.input-avaliar {
  text-align: center;
  margin-top: 10px;
}

.avaliar {
  color: #012030;
  width: 90px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 5px;
  font-size: 16px;
}

.confirmar-avaliacao {
  height: 30px;
  margin-left: 10px;
  background-color: #75d1ff;
  color: #fff;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.confirmar-avaliacao:hover {
  background-color: #0a6491;
  color: #012030;
  border-radius: 10px;
  color: #fff;
}
</style>
