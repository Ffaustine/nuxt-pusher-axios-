<template>
  <div>
    <p>Message reçu : {{ receivedMessage }}</p>
  </div>
</template>

<script>
import Pusher from 'pusher-js';

export default {
  data() {
    return {
      receivedMessage: ''
    };
  },
  mounted() {
    Pusher.logToConsole = true;
    const channel = this.$pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      console.log(data)
      this.receivedMessage = data.message;
    });
    this.$pusher.subscribe('my-channel').bind('pusher:subscription_succeeded', data => {
      console.log('Abonnement réussi au canal my-channel');
     });
  }
}
</script>
