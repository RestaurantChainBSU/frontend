import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ListItem(props) {
  const visibleDescription = (props.description.length > 30) ? props.description.substring(0, 30) + '...' : props.description;

  return (
    <Card style={{ height: '380px', flex: '0 0 300px' }}>
      <Card.Body>
      <Card.Img variant="top" src={props.imageUrl} style={{ height: '160px' }} />
        <Card.Title className='mt-3'><Link to={props.detailLink}>{props.name}</Link></Card.Title>
        <Card.Text style={{ height: '50px' }}>{visibleDescription}</Card.Text>
        <Button variant="danger" onClick={ () => props.handleDeleteButtonClick() }>Удалить</Button>
      </Card.Body>
    </Card>
  );
}

export default ListItem;
