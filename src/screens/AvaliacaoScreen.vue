<template>
  <div class="equipes-container">
    <div class="equipes-main">
      <div class="titulo-equipes">
        <h1>Equipe</h1>
      </div>
      <div class="botao-voltar">
        <router-link to="/">
          <button class="voltar">Voltar</button>
        </router-link>
      </div>
      <div class="nomes-container equipe">
        <div class="nome-item">Nome da Equipe</div>
        <input type="number" class="avaliacao-equipe" placeholder="Nota" />
      </div>
      <div class="titulo-equipes">
        <h1>Alunos</h1>
      </div>
      <div class="nomes-container alunos">
        <div v-for="aluno in alunos" :key="aluno.id" class="aluno-item">
          <div class="nome">{{ aluno.nome }}</div>
          <input type="number" class="avaliacao" placeholder="Nota" v-model="aluno.nota" />
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
      alert('Avaliações confirmadas:', this.alunos);
    },
  },
};
</script>
 
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
  /* Adicionado para posicionar o botão corretamente */
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
  background-color: #0a6491;
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
  max-height: 150px;
  overflow-y: auto;
}

.nomes-container.alunos {
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

.botao-avaliar {
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
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

.aluno-item {
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

.avaliacao-equipe {
  margin: auto;
  color: #012030;
  width: 80px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 5px;
  font-size: 16px;
}
</style>
 