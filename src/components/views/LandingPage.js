import React from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
// import { Button } from "../utils/styledComponents.js";

import styled from "styled-components";
import Medical from "../../images/Med-Child.png";
import Family from "../../images/family.png";

const NewCard = styled(Card)`
  padding-bottom: 25px;
  padding-right: 10px;
  // padding-top: -10px;
  margin-bottom: 5%;
  border-radius: 10px;
  box-shadow: 0px 5px 10px lightgrey;
`;

const NewCol = styled(Col)`
  background: #eeeded;
`;

const H1 = styled.h1`
  padding-top: 25px;
`;

// export const ButtonPatient = styled.button`
//   background: #ff9d65;
//   color: #ffffff;
//   &:hover {
//     background: #ffb286;
//     border: 1px solid #ffffff;
//     color: #ffffff;
//   }
//   border-radius: 4px;
//   border: none;
//   margin: auto 15px;
//   padding: 14px 25px;
//   font-weight: bold;
//   font-size: 16px;
//   max-height: 50px;
// `;

function LandingPage() {
  return (
    <>
      <Container>
        <NewCard>
          <CardBody>
            <CardText>
              <p>
                Ex amet non mollit dolor. Est ipsum Lorem reprehenderit ipsum
                ad. Commodo ea velit ipsum elit ullamco. Elit Lorem ad commodo
                labore officia id nulla ad pariatur et sint voluptate ad. Duis
                consectetur elit anim excepteur eiusmod. Enim magna nulla et
                excepteur. Aliquip mollit pariatur in officia sit anim occaecat
                est id nulla ea adipisicing laborum ipsum. Sint exercitation non
                officia est nulla nisi exercitation.
              </p>
            </CardText>
          </CardBody>
        </NewCard>
        <NewCard>
          <CardTitle>
            <H1 className="patient">Easily Accesable Immunization Records</H1>
          </CardTitle>
          <CardBody>
            <Row>
              <Col lg="6">
                <img src={Family} alt="Mom and Child" />
              </Col>
              <Col lg="6">
                <p className="card-text">
                  As a parent, it's hard to keep track of your child's
                  immunization records! Especially if you move states, or switch
                  doctors. This app allows medical professionals to upload
                  immunization records to your personal or family account. As a
                  parent, it's hard to keep track of your child's immunization
                  records! Especially if you move states, or switch doctors.
                  This app allows medical professionals to upload immunization
                  records to your personal or family account.
                </p>
              </Col>
            </Row>
          </CardBody>
        </NewCard>
      </Container>

      <Container>
        <NewCard>
          <CardTitle>
            {" "}
            <H1 className="id">Peace of mind for your patients.</H1>
          </CardTitle>
          <CardBody>
            <Row>
              <Col lg="6">
                <p className="card-text">
                  Est aliquip minim sit mollit dolor laboris sunt. Ex nulla
                  magna laboris et aliquip dolor. Nisi magna ad et et. Commodo
                  aliquip non nulla do. Aliqua enim excepteur ipsum cupidatat
                  incididunt dolor fugiat aliquip ipsum cillum ea. Minim minim
                  ut est mollit dolore exercitation qui aute enim magna.
                  Exercitation consequat fugiat eu culpa tempor dolor cillum
                  occaecat non amet voluptate labore nostrud incididunt. Duis
                  elit officia deserunt minim excepteur proident ipsum
                  adipisicing ad enim proident sint.
                </p>
              </Col>
              <Col lg="6">
                <img src={Medical} alt="" />
              </Col>
            </Row>
          </CardBody>
        </NewCard>
      </Container>
      <Container>
        <Row>
          <Col lg="12">
            {/* <Alert color="danger">
              **Important: Do not use any data about real people in this app as
              it could be a violation of HIPAA regulations**
            </Alert> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;

{
  /* <Link to="/patient">
            <ButtonPatient>Patient</ButtonPatient>
          </Link>
          <Link to="/med">
            <Button>Provider</Button>
          </Link> */
}
