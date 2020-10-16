<template>
  <div class="login">
    <h1>{{ name }}</h1>
    <LoginForm/>
  </div>
</template>

<script>

import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'LoginPage',
  props: {
    msg: String,
  },
  components: {
    LoginForm,
  },
  data() {
    return {
      name: 'Login Page',
    };
  },
};
</script>
