<template>
  <header class="custom-header">
    <h1>Header</h1>
    <div class="user-badge">
      <img class="perfil-img" src="@/media/logo.png" alt="Perfil">
    </div>
  </header>
</template>

<style scoped>
.perfil-img {
  width: 100%; 
  height: 100%;
  border-radius: 50%;
  object-fit: cover; 
}

.custom-header {
  text-align: center;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #012030;
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;
  margin: 0px;
  top: 0;
  left: 0;
}

.user-badge {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden; 
}
</style>
