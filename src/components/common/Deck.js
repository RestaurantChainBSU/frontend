import { CardDeck } from 'react-bootstrap';

function Deck(props) {
  return (
    <CardDeck style={{ width: '80%', margin: 'auto', marginTop: '30px', justifyContent: 'center' }} >
        {props.cards}
    </CardDeck>
  );
}

export default Deck;
