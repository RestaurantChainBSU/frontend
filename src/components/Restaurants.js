import { React, Component } from 'react';

import PaginatedDeck from './common/PaginatedDeck';
import ListItem from './common/ListItem';

import adminService from '../services/AdminService';

class Restaurants extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    this._loadRestaurants();
  }

  render() {
    const restaurantItems = this.state.restaurants.map(restaurant => <ListItem name={restaurant.name} description={restaurant.description} imageUrl={restaurant.imageUrl} key={restaurant.name} />);

    return (
      <>
        <PaginatedDeck cards={restaurantItems} />
      </>
    );
  }

  _loadRestaurants() {
    adminService.getAllRestaurants().then(restaurants => {
      this.setState({
        restaurants
      });
    });

  }

}

export default Restaurants;
