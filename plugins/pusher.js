import Pusher from 'pusher-js';

export default ({ app }, inject) => {
  const pusher = new Pusher('18e45999a252e4b40575', {
    cluster: 'eu',
  });

  inject('pusher', pusher);
};
