<script setup>
import BottonComp from '@/components/BottonComp.vue'; 
import HeaderComp from '@/components/HeaderComp.vue';
</script>

<template>
  <header><HeaderComp/></header>
  <div class="container">
    <div class="bola-container">
      <div class="inner-container">
        <img class="logo-img" src="@/media/logo.png" alt="Logo"> 
      </div>
    </div>
    <BottonComp />
  </div>
</template>

<style scoped>


.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-img {
  max-height: 100%;
  max-width: 100%;
}

.bola-container {
  width: 240px;
  height: 240px;
  background-color: #012030;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; 
  overflow: hidden; 
}

.inner-container {
  text-align: center;
  align-items: center;
}
</style>
