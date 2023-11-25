<template>
   <div class="equipes-container">
      <div class="equipes-main">
         <div class="titulo-equipes">
            <h1>Equipe</h1>
         </div>
         <div class="botao-voltar">
            <router-link to="/"><button class="voltar">Voltar</button></router-link>
         </div>
         <div class="nomes-container equipe">
            <div class="nome-item">Nome da Equipe</div>
         </div>
         <div class="titulo-equipes">
            <h1>Alunos</h1>
         </div>
         <div class="nomes-container alunos">
            <div class="aluno-item">
               <div class="nome">Nome do Aluno 1</div>
               <input type="number" class="avaliacao" placeholder="Nota">
            </div>
            <div class="aluno-item">
               <div class="nome">Nome do Aluno 2</div>
               <input type="number" class="avaliacao" placeholder="Nota">
            </div>
            <div class="aluno-item">
               <div class="nome">Nome do Aluno 3</div>
               <input type="number" class="avaliacao" placeholder="Nota">
            </div>
            <div class="aluno-item">
               <div class="nome">Nome do Aluno 4</div>
               <input type="number" class="avaliacao" placeholder="Nota">
            </div>
            <div class="aluno-item">
               <div class="nome">Nome do Aluno 5</div>
               <input type="number" class="avaliacao" placeholder="Nota">
            </div>
         </div>
      </div>
   </div>
   <div class="botao-avaliar">
            <button class="avaliar">Confirmar</button>
         </div>

</template>
 
<style>
.equipes-container {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
}

.equipes-main {
   height: 500px;
   width: 800px;
   color: #fff;
   background-color: #012030;
   border-radius: 30px;
   overflow: hidden;
   margin: auto;
}

.titulo-equipes {
   margin-top: 20px;
   text-align: center;
}

.botao-voltar {
   position: absolute;
   top: 10px;
   left: 10px;
}

.voltar {
   height: 50px;
   width: 200px;
   font-size: 16px;
   background-color: #75d1ff;
   color: #fff;
   border-radius: 15px;
   transition: background-color 0.3s;
}

.voltar:hover {
   background-color: #012030;
   color: #012030;
   border-radius: 15px;
   color: #fff;
}

.nomes-container {
   margin-top: 20px;
   color: #000;
   text-align: center;
}

.nomes-container.equipe {
   max-height: 150px;
   overflow-y: auto;
}

.nomes-container.alunos {
   max-height: 300px;
   overflow-y: auto;
   margin-bottom: 10px;
}

.nome-item {
   border: 2px solid #fff;
   border-radius: 10px;
   padding: 10px;
   margin: 5px;
   font-size: 20px;
   background-color: #fff;
}

.botao-avaliar {
   text-align: center;

}

.botao-avaliar {
   text-align: center;
}

.avaliar-button {
   height: 50px;
   width: 200px;
   font-size: 16px;
   background-color: #75d1ff;
   color: #fff;
   border-radius: 15px;
   transition: background-color 0.3s;
   margin-top: 10px;
}

.avaliar-button:hover {
   background-color: #012030;
   color: #012030;
   border-radius: 15px;
   color: #fff;
}

.aluno-item {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 10px;
}

.nome {
   border: 2px solid #fff;
   border-radius: 10px;
   padding: 10px;
   margin: 5px;
   font-size: 20px;
   background-color: #fff;
}

.avaliacao {
   color: #012030;
   width: 80px;
   height: 30px;
   border: 2px solid #fff;
   border-radius: 10px;
   padding: 5px;
   font-size: 16px;
}
</style>
 