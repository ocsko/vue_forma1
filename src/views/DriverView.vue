<template>
<div class="container">
  <div class="row">

      <div class="card col-lg-12 col-md-6 col-sm-12 p-1" v-for="driver in drivers" :key="driver.driverID">

        <div class="card-header">

          <h4>A versenyző neve: {{driver.name}} </h4>
        </div>

        <div class="card-body" >
            A versenyző születési éve: {{driver.birthYear}} <br>
            Rajtszáma : {{driver.driverNumber}}
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
  background-color: lightblue !important;
}



.card-footer{
  background-color: lightblue !important;

}

.card{
  margin-bottom: 50px !important;
}




</style>
