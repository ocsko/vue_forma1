<template>
<div class="container">
  <div class="row">

      <div class="card col-lg-12 col-md-6 col-sm-12 p-1" v-for="team in teams" :key="team.teamID">

        <div class="card-header">

          <h2>A csapat neve: {{team.name}} </h2>
        </div>

        <div class="card-body" >
            <h3>Csapat székhelye: {{team.headquarters}}</h3>
            <h3>Alapítási év: {{team.establishment_year}}</h3>
        </div>

        <div class="card-footer">
        <h3>Bajnoki címek: {{team.championship_titles}}</h3>

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
      teams: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/api/Teams")
      .then(response => {
         this.teams = response.data
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
