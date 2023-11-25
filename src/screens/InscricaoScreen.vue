<template>
  <div class="equipes-container">
    <div class="equipes-main">
      <div class="titulo-equipes">
        <h1>Equipe</h1>
        <input v-model="nomeEquipe" class="equipe-input" placeholder="Nome da Equipe">
      </div>
      <div class="botao-voltar">
        <router-link to="/"><button class="voltar">Voltar</button></router-link>
      </div>
      <div class="nomes-container">
        <div v-for="(aluno, index) in alunos" :key="aluno.id">
          <input v-model="aluno.nome" class="nome-item" :placeholder="'Nome ' + (index + 1)">
        </div>
      </div>
      <div class="botao-avaliar">
        <button class="avaliar" @click="confirmarAvaliacao">Confirmar</button>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      nomeEquipe: 'Nome da Equipe',
      alunos: [
        { id: 1, nome: 'Nome do Aluno 1', nota: null },
        { id: 2, nome: 'Nome do Aluno 2', nota: null },
        { id: 3, nome: 'Nome do Aluno 3', nota: null },
        { id: 4, nome: 'Nome do Aluno 4', nota: null },
        { id: 5, nome: 'Nome do Aluno 5', nota: null },
        { id: 6, nome: 'Nome do Aluno 6', nota: null },
      ],
    };
  },
  methods: {
    confirmarAvaliacao() {
      alert('Avaliações confirmadas:', this.alunos, 'Nome da Equipe:', this.nomeEquipe);
    },
  },
};
</script>

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

.botao-avaliar {
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding-top: 10px;
}

.avaliar {
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
