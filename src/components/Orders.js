import { React, Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

import adminService from '../services/AdminService';

class Orders extends Component {
  
  columns = [{
    dataField: 'id',
    text: 'Order ID'
  }, {
    dataField: 'address',
    text: 'Адрес'
  }, {
    dataField: 'order_status',
    text: 'Статус заказа'
  }, {
    dataField: 'total_price',
    text: 'Сумма заказа'
  }];

  constructor(props) {
    super(props);

    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    this._loadOrders();
  }

  render() {
    return (
      <BootstrapTable keyField='id' data={ this.state.orders } columns={ this.columns } />
    );
  }

  _loadOrders() {
    adminService.getAllOrders().then(orders => {
      this.setState({
        orders
      });
    });

  }

}

export default Orders;
