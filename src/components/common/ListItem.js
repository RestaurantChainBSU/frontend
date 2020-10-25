import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ListItem(props) {
  return (
    <Card style={{ flex: '0 0 300px' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="danger">Удалить</Button>
      </Card.Body>
    </Card>
  );
}

export default ListItem;
