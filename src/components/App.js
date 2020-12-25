import Header from './Header';

import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';

import Restaurants from './Restaurants';
import RestaurantDetail from './RestaurantDetail';
import Dishes from './Dishes';
import DishDetail from './DishDetail';
import Orders from './Orders';
import Login from './Login';
import NewRestaurant from './NewRestaurant';
import { Component } from 'react';
import NewDish from './NewDish';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authed: false,
    }
  }

  render() {
    return (
      <div className="app">
        <Header authed={this.state.authed} />
        <Switch>
          <Route exact path='/login' render={(props) => <Login auth={() => this._auth()} {...props}/>} />
          <PrivateRoute authed={this.state.authed} exact path='/restaurants' component={Restaurants} />
          <PrivateRoute authed={this.state.authed} exact path='/restaurants/:id' component={RestaurantDetail} />
  
          <PrivateRoute authed={this.state.authed} exact path='/new-restaurant' component={NewRestaurant} />
          <PrivateRoute authed={this.state.authed} exact path='/new-dish' component={NewDish} />
  
          <PrivateRoute authed={this.state.authed} exact path='/dishes' component={Dishes} />
          <PrivateRoute authed={this.state.authed} exact path='/dishes/:id' component={DishDetail} />
  
          <PrivateRoute authed={this.state.authed} exact path='/orders' component={Orders} />
        </Switch>
      </div>
    );
  }

  _auth() {
    this.setState({
      authed: true
    });
  }

}

export default withRouter(App);
