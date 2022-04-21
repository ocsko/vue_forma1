<template>
  <h2>Fogadjon!</h2>
  <div>
    <form @submit.prevent="kuldes">
      <div>
        <label>Kérem írja be a futamot, amelyikre fogadni szeretne:</label>
        <input @change="change()" type="text" placeholder="Futam neve" name="futam" v-model="futam"/>
      </div>
      <div>
        <label>Kérem írja be a csapat nevét:</label>
        <input @change="change()" type="text" placeholder="Csapat neve" name="csapat" v-model="csapat"/>
      </div>
      <div>
        <label>Kérem írja be a versenyző nevét:</label>
        <input @change="change()" type="text" placeholder="Versenyző neve" name="versenyzo" v-model="versenyzo"/>
      </div>
      <div>
        <input type="submit" value="Fogadás" :disabled="isDisabled" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      futam: '',
      csapat:  '',
      versenyzo: '',
      isDisabled: true,
    }
  },
  methods:{
    change(){
      if (this.futam == '' || this.csapat == '' || this.versenyzo == ''){
        this.isDisabled = true; 
      } else{
        this.isDisabled = false;
      }
    },
    kuldes(){
      let url = 'http://localhost:5000/api/Bets'
      let adat = ''
      if (this.futam != '' && this.csapat != '' && this.versenyzo != ''){
        axios.post(url, adat)
        .then((resp) => {console.log(resp)})
        
      } 
    }
  }
};
</script>

<style>

</style>