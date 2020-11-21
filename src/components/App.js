import Header from './Header';

import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import Restaurants from './Restaurants';
import RestaurantDetail from './RestaurantDetail';
import Dishes from './Dishes';
import DishDetail from './DishDetail';
import Orders from './Orders';
import NewRestaurant from './NewRestaurant';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/restaurants' component={Restaurants} />
        <Route exact path='/restaurants/:id' component={RestaurantDetail} />

        <Route exact path='/new-restaurant' component={NewRestaurant} />

        <Route exact path='/dishes' component={Dishes} />
        <Route exact path='/dishes/:id' component={DishDetail} />

        <Route exact path='/orders' component={Orders} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
