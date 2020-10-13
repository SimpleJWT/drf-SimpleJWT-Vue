<template>
  <div>
    <h1>{{ name }}</h1>
    <button v-on:click="testPing">Ping</button>
    <p>{{this.pingValue}}</p>
  </div>
</template>

<script>
import { ping } from '../services/api/ping';

export default {
  name: 'AuthenticatedPing',
  props: {
    msg: String,
  },
  data() {
    return {
      name: 'Authenticated Ping',
      pingValue: '',
    };
  },
  methods: {
    testPing() {
      this.pingValue = '';
      ping().then((data) => {
        this.pingValue = data.id;
      }).catch((error) => {
        alert(error);
      });
    },
  },
};
</script>
