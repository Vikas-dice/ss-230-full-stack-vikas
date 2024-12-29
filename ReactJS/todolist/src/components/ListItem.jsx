import { Col, Container, Row, Button } from "react-bootstrap";

const ListItem = (props) => {
  return (
    <Container className="mb-3">
      <Row>
        <Col>
          <h3>{props.item.value}</h3>
        </Col>
        <Col>
          <Button
            className="ml-3"
            variant="primary"
            onClick={() => {
              props.beforeUpdateItem(props.item.id);
            }}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            onClick={() => {
              props.onDeleteHandler(props.item.id);
            }}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ListItem;
