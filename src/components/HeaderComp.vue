<template>
  <header class="custom-header">
    <h1>Header</h1>
    <div class="user-badge"></div>
  </header>
</template>

<style scoped>

.custom-header {
  text-align: center;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #492649;
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;
}

.user-badge {
  width: 100px;
  height: 100px;
  background-color: #27ae60;
  border-radius: 50%;
}
</style>
