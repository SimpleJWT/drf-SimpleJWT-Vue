<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <div v-if="!isLoggedIn"><router-link to="/login">Login</router-link> |</div>
      <div v-else><div v-on:click="handleLogout" to="/">Logout |</div></div>
      <router-link to="/ping">Ping</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['isLoggedIn']),
  },
  methods: {
    handleLogout(event) {
      event.preventDefault();
      this.logout();
      this.$router.push('/');
    },
    ...mapActions(['logout']),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
