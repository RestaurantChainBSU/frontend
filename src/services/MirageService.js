import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      restaurant: Model,
    },

    seeds(server) {
      server.create('restaurant', { name: 'Ресторан 1', description: 'Описание Описание Описание ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 2', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 3', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 4', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 5', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 6', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 7', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 8', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 9', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 10', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
      server.create('restaurant', { name: 'Ресторан 11', description: 'Описание', imageUrl: 'https://i.pinimg.com/originals/79/b8/6e/79b86ef3a30e54558a31ad5b7d6974c4.jpg', address: 'ул. Щорса 11-20' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/restaurants', (schema) => {
        return schema.restaurants.all();
      });
      this.get('/restaurants/:id', (schema, req) => {
        const id = req.params.id;
        return schema.restaurants.find(id);
      });
      this.put('/restaurants/:id', (schema, req) => {
        const id = req.params.id;
        return schema.restaurants.find(id).update(JSON.parse(req.requestBody)).save();
      });
      this.delete('/restaurants/:id', (schema, req) => {
        const id = req.params.id;
        schema.restaurants.find(id).destroy();
      });
      this.post('/restaurants', (schema, req) => {
        const restaurant = schema.restaurants.new(JSON.parse(req.requestBody));
        return restaurant.save().id;
      });

    },
  });

  return server;
}