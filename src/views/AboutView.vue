<template>
<div class="container">
  <div class="row">

      <div class="card col-lg-12 col-md-6 col-sm-12 p-1" v-for="palya in palyak" :key="palya.roundID">

        <div class="card-header">

          <h4>A pálya neve: {{palya.location}} </h4>
          <h1>Körök száma: {{palya.numberOfLaps}}</h1>
          <h1>A futam kezdete: {{palya.date}} </h1>


        </div>

        <div class="card-body" >
        </div>

        <div class="card-footer">
        

        </div>


      </div>

  </div>
</div>


</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      palyak: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/api/Rounds")
      .then(response => {
         this.palyak = response.data
      })

  }
};

</script>

<style>




.card-header{
  background-color: lightblue !important;
}



.card-footer{
  background-color: lightblue !important;

}

.card{
  margin-bottom: 50px !important;
}




</style>
