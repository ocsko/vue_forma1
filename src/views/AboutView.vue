<template>
<p> "heló" </p>

  <div class="container">
    <div class="row">

        <div class="card col-lg-12 col-md-6 col-sm-12 p-1" v-for="round in rounds" :key="round.location" >

          <div class="card-header">

            <h4>{{round.location}} </h4>
          


          </div>

          <div class="card-body" >


          <h4>a </h4>

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
      rounds: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/api/Rounds")
      .then(response => {
         this.rounds = response.data
      })

  }
};

</script>
<style scoped>
.card-header{
  background-color: brown !important;
  
}
</style>
