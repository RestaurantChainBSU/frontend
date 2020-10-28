import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ListItem(props) {
  return (
    <Card style={{ height: '500px', flex: '0 0 300px' }}>
      <Card.Body>
      <Card.Img variant="top" src={props.imageUrl} />
        <Card.Title className='mt-3'>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="danger">Удалить</Button>
      </Card.Body>
    </Card>
  );
}

export default ListItem;
