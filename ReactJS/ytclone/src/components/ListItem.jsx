import { Container, Row, Col, Image } from "react-bootstrap";

const ListItem = ({ data, onChange }) => {
  console.log("===>", data);
  return (
    <Container onClick={() => onChange(data)}>
      <Row className="mb-3">
        <Col sm={3}>
          <Image
            src={data.snippet.thumbnails.high.url}
            width={70}
            height={70}
          />
        </Col>
        <Col sm={9}>
          <h6>{data.snippet.channelTitle}</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default ListItem;
