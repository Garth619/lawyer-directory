<template>
  <div class="hello">
    
    <div v-for="browsepracticearea in browsepracticeareas" :key="browsepracticearea.id">

      <h1 v-html="browsepracticearea.name"></h1>

    </div>

  <div class="errors" v-for="error of errors" :key="error.id">

    {{error.message}}
  
  </div><!-- errors -->

  </div><!-- hello -->
</template>

<script>
import axios from 'axios';
export default {
  name: 'BrowsePracticeareas',
  data () {
    return {
      browsepracticeareas: [],
      errors:[]
    }
  },
  created:function() {
    axios.get('http://lawyers-directory.com/wp-json/wp/v2/lawfirm_practiceareas?orderby=name')
    .then(response => {
      this.browsepracticeareas = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>

</style>