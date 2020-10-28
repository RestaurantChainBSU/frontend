import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      restaurant: Model,
    },

    seeds(server) {
      server.create('restaurant', { name: 'Ресторан 1', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 2', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 3', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 4', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 5', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 6', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 7', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 8', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 9', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 10', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
      server.create('restaurant', { name: 'Ресторан 11', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/restaurants', (schema) => {
        return schema.restaurants.all();
      });
    },
  });

  return server;
}