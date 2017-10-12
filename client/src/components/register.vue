<template>
  <form>
  User Name:<br>
  <input type="text" v-model='formregister.username' name="username"><br>
  Password:<br>
  <input type="text" v-model='formregister.password' name="password"><br>
  Email:<br>
  <input type="text" v-model='formregister.email' name="email"><br>
  <br>
  <button type="button" @click="adduser">Submit</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formregister: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    adduser () {
      axios({
        method: 'post',
        url: 'http://localhost:3000/register',
        data: {
          username: this.formregister.username,
          password: this.formregister.password,
          email: this.formregister.email
        }
      })
      .then(() => {
        this.$router.push('/')
      })
      .catch(err => [
        console.log(err)
      ])
    }
  }
}
</script>

<style lang="css">
</style>
