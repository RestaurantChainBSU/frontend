

class AdminService {

  HOST = 'localhost:8888';

  async getAllRestaurants() {
    return fetch(`/api/restaurants`)
              .then(result => result.json())
              .then(body => body.restaurants);
  }

}

const adminService = new AdminService();

export default adminService;
