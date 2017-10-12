<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <br>
    <form method="post">
      User Name:<br>
      <input type="text" v-model="formLogin.username"name="username"><br>
      Password:<br>
      <input type="text" v-model="formLogin.password" name="password">
      <br>
      <button type="button" @click="login">Login</button>
      <br>
      <br>
      <button type="button" @click="register">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      msg: 'Please login if you want see article or if you dont have password please register first',
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          username: this.formLogin.username,
          password: this.formLogin.password
        }
      })
      .then(response => {
        localStorage.setItem('token', response.data)
        this.$router.push('/article')
      })
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
