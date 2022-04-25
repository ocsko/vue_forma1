<template>
<div class="container">
  <div class="row">

      <div class="card col-lg-12 col-md-6 col-sm-12 p-1" v-for="driver in drivers" :key="driver.driverID">

        <div class="card-header">

          <h2>A versenyző neve: {{driver.name}} </h2>
        </div>

        <div class="card-body" >
            <h3>A versenyző születési éve: {{driver.birthYear}}</h3>
            <h3>Rajtszáma : {{driver.driverNumber}}</h3>
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
      drivers: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/api/Drivers")
      .then(response => {
         this.drivers = response.data
      })

  }
};

</script>

<style>




.card-header{
  background-color: lightcoral !important;
}



.card-footer{
  background-color: lightcoral !important;

}

.card{
  margin-bottom: 50px !important;
}




</style>
