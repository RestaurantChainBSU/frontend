import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      restaurant: Model,
    },

    seeds(server) {
      server.create('restaurant', { name: 'Ресторан 1', description: 'Описание 1' });
      server.create('restaurant', { name: 'Ресторан 2', description: 'Описание 2' });
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