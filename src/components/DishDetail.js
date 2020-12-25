import { React, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import adminService from '../services/AdminService';

class DishDetail extends Component {

  constructor(props) {
    super();

    this.id = props.match.params.id;

    this.state = {
      dish: null,
      editable: false,
    };

  }

  componentDidMount() {
    this._loadDish();
  }

  render() {
    const dish = this.state.dish;
    return (
      <>
        {dish != null &&
          <div style={{ marginLeft: '30px', marginTop: '30px', width: '1200px' }}>
            <Form.Group>
              <Form.Label style={{ fontSize: '30px' }}>Название блюда</Form.Label>
              <Form.Control type="text" defaultValue={dish.dish_name} disabled={!this.state.editable} 
                onChange={ event =>  this._updateDishField('dish_name', event.target.value) } />

              <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Описание блюда</Form.Label>
              <Form.Control as="textarea" rows={3} defaultValue={dish.dish_descr} disabled={!this.state.editable} 
                onChange={ event =>  this._updateDishField('dish_descr', event.target.value) } />

              <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Ссылка на изображение</Form.Label>
              <Form.Control type="text" defaultValue={dish.image_link} disabled={!this.state.editable}
                onChange={ event =>  this._updateDishField('image_link', event.target.value) } />

              <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Цена</Form.Label>
              <Form.Control type="text" defaultValue={dish.price} disabled={!this.state.editable}
                onChange={ event =>  this._updateDishField('price', event.target.value) } />

              {this.state.editable &&
                <Button style={{ marginTop: '30px' }} onClick={ () => this._handleSaveChangesClick() }>Сохранить</Button>
              }
              {!this.state.editable &&
                <Button style={{ marginTop: '30px' }} onClick={ () => this._handleEditDishClick() }>Редактировать</Button>
              }
            </Form.Group>
          </div>
        }
      </>
    );
  }

  _updateDishField(field, value) {
    const dish = this.state.dish;
    dish[field] = value;
    this.setState({
      dish
    });
  }

  _handleEditDishClick() {
    this.setState({
      editable: true,
    });
  }

  async _handleSaveChangesClick() {
    this.setState({
      editable: false,
    });

    await adminService.updateDish(this.state.dish);
    this.props.history.push(`/dishes/${this.id}`);
  }

  _loadDish() {
    adminService.getDishById(this.id).then(dish => {
      this.setState({
        dish
      });
    });

  }

}

export default DishDetail;
