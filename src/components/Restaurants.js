import { React, Component } from 'react';

import Deck from './common/Deck';
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
    const restaurantItems = this.state.restaurants.map(restaurant => <ListItem name={restaurant.name} description={restaurant.description} key={restaurant.name} />);

    return (
      <>
        <Deck cards={restaurantItems} />
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
