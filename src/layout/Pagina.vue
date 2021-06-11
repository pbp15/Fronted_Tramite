<template>
<body>
   
  <div class="click-closed"></div>

  <!--componente header -->
      <headex/>

  <!--componente carrusel  --> 
      <carruselx/>
  <!--componente ofrecemos -->
      <ofrecemos/> 
      <!--componente footer -->
      <footex/>  

</body>

</template>

<script>
  import Headex from './Part-pagina/Headex.vue'
  import Carruselx from './Part-pagina/Carruselx.vue'
  import Ofrecemos from './Part-pagina/Ofrecemos.vue'
  import Footex from './Part-pagina/Footex.vue'

  export default {
    components: {
      Headex,
      Carruselx,
      Ofrecemos,
      Footex
      }
  }

</script>

<style>

</style>