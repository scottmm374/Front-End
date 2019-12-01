import React from "react";
import { Container, Row, Col, Alert } from "reactstrap";

function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col lg="6">
          <h3>Contributors: Michelle Scott - Eric Wood - Matthew</h3>
        </Col>
        <Col lg="6">
          <h3>@ IM Records BW Lambda</h3>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Alert color="danger">
            **Important: Do not use any data about real people in this app as it
            could be a violation of HIPAA regulations**
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
