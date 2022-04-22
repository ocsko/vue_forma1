<template>
  <div>
    <h2>Üdvözöljük a Forma 1-GO weboldalán!</h2>
    <h3>Lépjen a fent található menü segítségével!</h3>
  </div>
  <div class="card col-lg-12 col-md-6 col-sm-12 p-1" >
    <h4>Ha még nem tette,töltse le mobilos applikációnkat is!</h4>
    <a href="">Letöltés</a>
    <br>
    <img src="../assets/mobil_1.png" alt="desktop">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
.card{
  margin-bottom: 50px !important;
}
</style>