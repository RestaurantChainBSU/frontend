import Deck from './common/Deck';
import ListItem from './common/ListItem';

function Restaurants() {
  const restaurantItems = [<ListItem name='Название ресторана1' description='Описание ресторана1' />, 
                           <ListItem name='Название ресторана2' description='Описание ресторана2' />,
                           <ListItem name='Название ресторана3' description='Описание ресторана3' />];

  return (
    <>
      <p>Рестораны</p>
      <Deck cards={restaurantItems} />
    </>
  );
}

export default Restaurants;
