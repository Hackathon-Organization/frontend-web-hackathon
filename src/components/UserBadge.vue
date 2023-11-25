<template>
    <header>
        <div class="user-badge">
        <img class="perfil-img" src="@/media/logo.png" alt="Perfil">
      </div>
    </header>
</template>

<style scoped>
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

</style>
```