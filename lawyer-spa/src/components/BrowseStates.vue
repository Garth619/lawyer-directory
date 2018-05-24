<template>
  <div>
    
<router-link to="/">Home</router-link>

    <div v-for="browsestate in browsestates" :key="browsestate.id">

      <h1 v-html="browsestate.name"></h1>

      <span>{{browsestate.id}}</span>

    </div>

  <div class="errors" v-for="error of errors" :key="error.id">

    {{error.message}}
  
  </div><!-- errors -->

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'BrowseStates',
  data () {
    return {
      browsestates: [],
      errors:[]
    }
  },
  created:function() {
    axios.get('http://lawyers-directory.com/wp-json/wp/v2/lawfirm_locations?parent=111')
    .then(response => {
      this.browsestates = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>

</style>