import { Container, Row, Col } from "react-bootstrap";

const FormContainerr = ({ children }) => {
  return (
    <Container>
      <Row className="justy-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainerr;
