<template>
  <div class="bola-container">
    <div class="inner-container">
      <img  class="logo-img" src="/src/media/logo.png" alt="Logo"> 
      <div class="button-container">
        <button class="custom-button">Botão 1</button>
        <button class="custom-button">Botão 2</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.logo-img {
 margin-top: 100px;
}
.bola-container {
  width: 240px;
  height: 240px;
  background-color: #012030;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40%;
  margin-top: 170px;
}

.inner-container {
  text-align: center;
  align-items: center;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.custom-button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #27ae60;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-button:hover {
  background-color: #219653;
}
</style>
