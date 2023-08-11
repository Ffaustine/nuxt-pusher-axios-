<template>
  <div>
    <button @click="triggerEvent">Déclencher l'événement</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async triggerEvent() {
      try {
        await axios.post('/api/tabB', { message: 'Hello'});
        console.log('Événement déclenché avec succès');
      } catch (error) {
        console.error('Erreur lors du déclenchement de l\'événement :', error);
      }
    }
  }
}
</script>
