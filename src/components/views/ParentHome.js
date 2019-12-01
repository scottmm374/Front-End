import React, { useState, useEffect, useContext } from "react";
import AddChild from "../forms/AddChild";
import ChildCardList from "../ChildCardList";
import { PatientInfoContext } from "../../context/PatientInfoContext";
import api from "../utils/api";
import { LightCard } from "../utils/styledComponents.js";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import RevealAddChild from "../views/RevealAddChild";
// import Children from "../../images/children.svg";

const NewCont = styled(Container)`
  background: #ffffff;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 1px 5px 8px lightgrey;
`;

const ParentHome = props => {
  const addPatient = useContext(PatientInfoContext);
  const [children, setChildren] = useState(null);
  const [shots, setShots] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      setShots([]);
      setRefresh(false);
    }
    api()
      .get(`/user/${localStorage.id}`)
      .then(res => {
        //console.log("it worked:", res.data);
        setChildren(res.data);
      })
      .catch(err => {
        console.log("error:", err);
      });
  }, [localStorage.id, refresh]);

  useEffect(() => {
    if (children) {
      children.map(child => {
        api()
          .get(`/record/${child.id}`)
          .then(res => {
            //console.log("this also worked:", res.data);
            //setShots(shots.concat([res.data]));
            setShots(shots =>
              shots.concat([{ id: child.id, shotData: res.data }])
            );
          })
          .catch(err => {
            console.log("error:", err);
          });
      });
    }
  }, [children]);

  //useEffect(()=>{console.log(refresh)}, [refresh]);

  if (!children || shots.length < children.length) return <h4>Loading...</h4>;

  return (
    <NewCont>
      <Row>
        <Col lg="12">
          <h1 className="patient">{addPatient.message}</h1>
          <p>{addPatient.email}</p>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <h2 className="patient">Your Children</h2>
        </Col>
        <Col lg="6">
          <h2 className="patient">Add Child</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <div className="children">
            {children.length > 0 ? (
              <ChildCardList children={children} shots={shots} />
            ) : (
              <div>No Children</div>
            )}
          </div>
        </Col>
        <Col lg="6">
          {/* <img src={Children} alt="children" /> */}
          <RevealAddChild />
          {/* <AddChild
            setRefresh={setRefresh}
            patientEmail={
              localStorage.patientEmail
                ? localStorage.patientEmail
                : "err@err.com"
            }
            userId={localStorage.id}
          /> */}
        </Col>
      </Row>
    </NewCont>
  );
};

export default ParentHome;
