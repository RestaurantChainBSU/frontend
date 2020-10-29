import { React, Component } from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';

import PaginatedDeck from './common/PaginatedDeck';
import ListItem from './common/ListItem';

import adminService from '../services/AdminService';

class Restaurants extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      restaurants: []
    };
  }

  componentDidMount() {
    this._loadRestaurants();
  }

  render() {
    let restaurants = this.state.restaurants;
    const searchQuery = this.state.searchQuery;
    if (searchQuery) {
      restaurants = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    const restaurantItems = restaurants.map(restaurant => <ListItem name={restaurant.name} description={restaurant.description} imageUrl={restaurant.imageUrl} key={restaurant.name} />);
    
    return (
      <>
        <Form inline style={{ justifyContent: 'center' }}>
          <FormControl type="text" placeholder="Поиск" className="mr-sm-2" onInput={e => this._handleSearchQueryChange(e.target.value) } />
          <Button variant="outline-success">Поиск</Button>
        </Form>
        <PaginatedDeck cards={restaurantItems} />
      </>
    );
  }

  _handleSearchQueryChange(searchQuery) {
    this.setState({
      searchQuery: searchQuery,
    });
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
