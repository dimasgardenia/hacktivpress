<template>
  <div>
    <h1>{{msg}}</h1>
    <article v-bind:result="tampung"></article>
  </div>
</template>

<script>
import axios from 'axios'
import articles from '@/components/articles'
export default {
  data () {
    return {
      msg: 'welcome to read article',
      tampung: []
    }
  },
  methods: {
    getAllarticle () {
      axios.get('http://localhost:3000/api/articles', {
        headers: {token: localStorage.getItem('token')}
      })
      .then(response => {
        console.log(response)
        this.tampung = response.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    articles
  }
}
</script>

<style lang="css">
</style>
