<template>
  <div>
    <button @click="sendMessage">Click Me</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async sendMessage() {
      try {
        await axios.post('http://localhost:5000/api/taB', { message: 'hello' });
        console.log('Message "hello" envoyé avec succès');
      } catch (error) {
        console.error('Erreur lors de l/envoi du message :', error);
      }
    }
  }
};
</script>
