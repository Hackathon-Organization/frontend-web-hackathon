<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  
  <header>
    <HeaderComp  />
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
</style>
