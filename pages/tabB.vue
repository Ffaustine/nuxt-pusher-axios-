<template>
  <div>
    <p>Received Message: {{ receivedMessage }}</p>
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

  created() {
    const pusher = new Pusher('18e45999a252e4b40575', {
    cluster: 'eu',
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      this.receivedMessage = data.message;
    });
  }
};
</script>
