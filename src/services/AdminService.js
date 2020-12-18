
class AdminService {

  HOST = 'http://35.194.36.11:8080';

  async getAllRestaurants() {
    return fetch(`${this.HOST}/restaurants`)
              .then(result => {
                return result.json()
              });
  }

  async getRestaurantById(restaurantId) {
    return fetch(`${this.HOST}/restaurants/${restaurantId}`)
              .then(result => result.json())
  }

  async updateRestaurant(restaurant) {
    const id = restaurant.id;
    delete restaurant.id;

    return fetch(`${this.HOST}/restaurants/${id}`, {
      method: 'POST',
      headers: {  
        "Content-type": "application/json"  
      },
      body: JSON.stringify(restaurant),
    })
  }

  async deleteRestaurantById(id) {
    return fetch(`${this.HOST}/restaurants/${id}`, {
      method: 'DELETE',
    })
      .then(result => result.status);
  }

  async createRestaurant(restaurant) {
    return fetch(`${this.HOST}/restaurants/`, {
      method: 'POST',
      headers: {  
        "Content-type": "application/json"  
      },
      body: JSON.stringify(restaurant),
    })
      .then(result => result.json())
      .then(body => body.id);
  }

  async getAllDishes() {
    return fetch(`${this.HOST}/dishes/`)
              .then(result => {
                return result.json()
              });
  }

  async getDishById(dishId) {
    return fetch(`${this.HOST}/dishes/${dishId}`)
              .then(result => result.json())
  }

  async updateDish(dish) {
    const id = dish.id;
    delete dish.id;

    return fetch(`${this.HOST}/restaurants/${id}`, {
      method: 'POST',
      headers: {  
        "Content-type": "application/json"  
      },
      body: JSON.stringify(dish),
    })
  }

  async deleteDishById(id) {
    return fetch(`${this.HOST}/dishes/${id}`, {
      method: 'DELETE',
    })
      .then(result => result.status);
  }

  async createDish(restaurant) {
    return fetch(`${this.HOST}/dishes/`, {
      method: 'POST',
      headers: {  
        "Content-type": "application/json"  
      },
      body: JSON.stringify(restaurant),
    })
      .then(result => result.json())
      .then(body => body.id);
  }

  async loginAdmin(login, password) {
    return fetch(`${this.HOST}/users/${login}/${password}`)
      .then(result => {
        if (result.ok) {
          return true;
        } else {
          return false;
        }
      });
  }

}

const adminService = new AdminService();

export default adminService;
