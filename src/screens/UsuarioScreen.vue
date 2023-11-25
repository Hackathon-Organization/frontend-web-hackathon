<template>
  <div class="user-profile">
    <div class="user-info">
      <div class="user-header">
        <h2 header-text>Nome do Usuário</h2>
      </div>
      <div class="info-text">
        <p>Email:</p>
        <p>Telefone:</p>
        <p>Data de Nascimento:</p>
      </div>
      <div class="dados">
        <div class="section" @click="toggleEquipes">
          <p>Equipes</p>
          <button class="toggle-button">&#9660;</button>
        </div>
        <div class="equipes-content" v-show="showEquipes" ref="equipesContainer">
        Conteúdo de Equipes
        </div>
        <div class="divider"></div>
        <div class="section" @click="togglePontuacao">
          <p>Pontuação</p>
          <button class="toggle-button">&#9660;</button>
        </div>
        <div class="pontuacao-content" v-show="showPontuacao" ref="pontuacaoContainer">
          Conteúdo de Pontuacao
        </div>
      </div>
    </div>
    <button class="logout-button">Logout</button>
  </div>
  <div class="botao-voltar">
        <router-link to="/"><button class="voltar">Voltar</button></router-link>
      </div>
</template>

<script>
export default {
  data() {
    return {
      showEquipes: false,
      showPontuacao: false,
    };
  },
  methods: {
    toggleEquipes() {
      this.showEquipes = !this.showEquipes;
      if (this.showEquipes) {
        this.$nextTick(() => {
          this.$refs.equipesContainer.classList.toggle("show-content", this.showEquipes);
        });
      } else {
        this.$refs.equipesContainer.classList.remove("show-content");
      }
    },
    togglePontuacao() {
      this.showPontuacao = !this.showPontuacao;
      if (this.showPontuacao) {
        this.$nextTick(() => {
          this.$refs.pontuacaoContainer.classList.toggle("show-content", this.showPontuacao);
        });
      } else {
        this.$refs.pontuacaoContainer.classList.remove("show-content");
      }
    },
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  margin-bottom: 20px;
}

.info-text {
  background-color: #012030;
  color: #fff;
  border-radius: 10px;
  width: 400px;
  padding: 10px;
  font-size: 20px;
  margin-top: 20px;
  line-height: 1.5;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-header {
  background-color: #012030;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
}

img {
  border-radius: 50%;
  margin-right: 20px;
}

.logout-button {
  margin-top: 20px;
  width: 300px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  color: #012030;
  background-color: #fff;
  border-radius: 10px;
}

.logout-button:hover {
  background-color: #012030;
  color: #fff !important;
}

.section {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #012030;
  color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 10px 0;
}

.toggle-button {
  cursor: pointer;
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
}

.equipes-content.show-content,
.pontuacao-content.show-content {
  max-height: 1000px; 
  overflow: hidden;
}

.equipes-content,
.pontuacao-content {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #012030;
  color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
}

.botao-voltar {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.voltar {
  height: 50px;
  width: 200px;
  font-size: 16px;
  background-color: #012030;
  color: #fff;
  border-radius: 15px;
  transition: background-color 0.3s;
}

.voltar:hover {
  background-color: #75d1ff;
  color: #012030;
  border-radius: 15px;
  color: #fff;
}



</style>
