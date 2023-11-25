

<template>
  <header class="custom-header">
    <h1 class="header-title">Tech Titans Hackathon</h1>
    <div class="user-badge">
        <router-link to="/usuario"><img class="perfil-img" src="/src/media/logo.png " alt="Imagem de perfil do usuário">
        </router-link>
          
      </div>
  </header>
</template>

<style scoped>

.header-title {
  text-align: center;
  flex: 1;

}
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #012030;
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;
}

.user-badge {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden; 
}

.perfil-img {
  width: 100%; 
  height: 100%;
  border-radius: 50%;
  object-fit: cover; 
}

@media (max-width: 600px) {
  .header-title {
    font-size: 18px; 
    text-align: center;
  }
}
</style>
