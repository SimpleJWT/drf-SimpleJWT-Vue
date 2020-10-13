<template>
  <div class="form">
    <form v-on:submit="handleLogin">
      <label for="username">username</label>
      <input type="text" id="current-username" v-model="username">
      <label for="username">password</label>
      <input type="password" id="current-password" v-model="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      nextPath: '/',
      errorMessage: '',
    };
  },
  mounted() {
    this.updateAfterLoginNextPath();
  },
  methods: {
    handleLogin(event) {
      event.preventDefault();
      this.login({ username: this.username, password: this.password })
        .then(() => {
          this.$router.push(this.nextPath);
        });
    },
    updateAfterLoginNextPath() {
      if ('next' in this.$route.query) {
        this.nextPath = this.$route.query.next;
      }
    },
    ...mapActions([
      'login',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
