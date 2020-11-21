
class AdminService {

  HOST = 'http://adroit-medium-271012.wm.r.appspot.com';

  async getAllRestaurants() {
    return fetch(`${this.HOST}/restaurants`)
              .then(result => result.json())
              .then(body => body.restaurants);
  }

  async getRestaurantById(restaurantId) {
    return fetch(`${this.HOST}/restaurants/${restaurantId}`)
              .then(result => result.json())
              .then(body => body.restaurant);
  }

  async updateRestaurant(restaurant) {
    return fetch(`${this.HOST}/restaurants/${restaurant.id}`, {
      method: 'POST',
      body: JSON.stringify(restaurant),
    })
      .then(result => result.status);
  }

  async deleteRestaurantById(id) {
    return fetch(`${this.HOST}/restaurants/${id}`, {
      method: 'DELETE',
    })
      .then(result => result.status);
  }

  async createRestaurant(restaurant) {
    return fetch(`${this.HOST}/restaurants`, {
      method: 'POST',
      body: JSON.stringify(restaurant),
    })
      .then(result => result.json());
  }

}

const adminService = new AdminService();

export default adminService;
