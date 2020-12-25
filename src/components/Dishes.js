import { React, Component } from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';

import PaginatedDeck from './common/PaginatedDeck';
import ListItem from './common/ListItem';

import adminService from '../services/AdminService';

class Dishes extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      dishes: []
    };
  }

  componentDidMount() {
    this._loadDishes();
  }

  render() {
    let dishes = this.state.dishes;
    const searchQuery = this.state.searchQuery;
    if (searchQuery) {
      dishes = dishes.filter(dish => dish.dish_name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    const dishItems = dishes.map(dish => <ListItem detailLink={`/dishes/${dish.id}`} name={dish.dish_name} description={dish.dish_descr} imageUrl={dish.image_link} key={dish.dish_name} handleDeleteButtonClick={() => this._handleDeleteDishClick(dish.id) } />);
    
    return (
      <>
        <Form inline style={{ justifyContent: 'center' }}>
          <FormControl type="text" placeholder="Поиск" className="mr-sm-2" onInput={e => this._handleSearchQueryChange(e.target.value) } />
          <Button variant="outline-success">Поиск</Button>
        </Form>
        <PaginatedDeck cards={dishItems} />
      </>
    );
  }

  _handleSearchQueryChange(searchQuery) {
    this.setState({
      searchQuery: searchQuery,
    });
  }

  _loadDishes() {
    adminService.getAllDishes().then(dishes => {
      this.setState({
        dishes
      });
    });

  }

  async _handleDeleteDishClick(id) {
    await adminService.deleteDishById(id);
    this.setState({
      dishes: this.state.dishes.filter(dish => dish.id !== id)
    });
    this.props.history.push(`/dishes`);
  }

}

export default Dishes;
