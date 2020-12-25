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
      restaurants = restaurants.filter(restaurant => restaurant.rest_name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    const restaurantItems = restaurants.map(restaurant => <ListItem detailLink={`/restaurants/${restaurant.id}`} name={restaurant.rest_name} description={restaurant.rest_descr} imageUrl={restaurant.image_link} key={restaurant.rest_name} handleDeleteButtonClick={() => this._handleDeleteRestaurantClick(restaurant.id) } />);
    
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

  async _handleDeleteRestaurantClick(id) {
    await adminService.deleteRestaurantById(id);
    this.setState({
      restaurants: this.state.restaurants.filter(restaurant => restaurant.id !== id)
    })
    this.props.history.push(`/restaurants`);
  }

}

export default Restaurants;
