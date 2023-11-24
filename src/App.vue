<script setup>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
</script>

<template>
  <div class="img-background ">
  <header>
    <HeaderComp />
  </header>
  <main>
    <MainComp />
  </main>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}
.img-background {
  height: 100vh; 
  background: linear-gradient(to bottom right, #75d1ff 50%, transparent 50%);
  overflow: hidden;
  margin: 0;
}
</style>
