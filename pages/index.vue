<template>
  <div class="container">
   <button id="my-button" @click='sendMessage'>Click Me!</button>
  </div>
</template>

<script>
import Pusher from 'pusher-js'

export default {

  mounted() {
    Pusher.logToConsole = true;
      const channel = this.$pusher.subscribe("my-channel");
      channel.bind('client-click', (data) => {
      this.message = data;
    })
  },
  methods: {
   async  sendMessage() {
      this.$axios.post('http://localhost:3000/api/tabB', { message: 'hello'})
        .then(response => {
          console.log('Response:', response.data)
        });
    }
  }
};
</script>
