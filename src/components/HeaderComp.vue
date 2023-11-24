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
  height: 50px;
  background-color: #012030;
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;
  margin: 0px;
}

.user-badge {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
}
</style>
