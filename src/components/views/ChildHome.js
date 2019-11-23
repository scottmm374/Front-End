import React, { useState, useEffect, useContext } from "react";
import { PatientInfoContext } from "../../context/PatientInfoContext";
import {
  LightCard,
  BetterField,
  NewLable,
  FormContainerAddChild,
  FlexWarp
} from "../utils/styledComponents.js";
// import UpdateChildForm from "../forms/UpdateChildForm.js";
import UpdateChildToggle from "../views/UpdateChildToggle";
import PermissionForm from "../forms/PermissionForm";
import { Card, CardTitle, CardBody, Col, Row } from "reactstrap";

import HistoryCard from "../HistoryCard";
import DeleteUser from "../utils/DeleteUser";

const ChildHome = props => {
  const addPatient = useContext(PatientInfoContext);
  const shots = props.location.state.shots;
  const [child, setChild] = useState(props.location.state.child);

  //useEffect(() => {}, [child]);

  return (
    <>
      <LightCard>
        <Card>
          <CardTitle>
            <h1>
              {child.firstName} {child.lastName}{" "}
              <p className="id">ID: {child.id}</p>
            </h1>
          </CardTitle>
          <CardBody>
            <Row>
              <Col>
                <h3>Gender</h3>
                <p className="id">{child.gender}</p>
                <h3>Age</h3>
                <p className="id">{child.age}</p>
              </Col>
              <Col>
                <h3>Weight</h3>
                <p className="id">{child.weight}</p>
                <h3>Height</h3>
                <p className="id">{child.height}</p>
              </Col>
            </Row>
            <p>Parent email : {addPatient.email}</p>
          </CardBody>
        </Card>

        <UpdateChildToggle ChildId={child.id} setChild={setChild} />
        <DeleteUser id={props.match.params.id} />
      </LightCard>
      <LightCard>
        <h2>Immunization History</h2>
        <HistoryCard shots={shots} />
      </LightCard>
      <PermissionForm />
    </>
  );
};

export default ChildHome;

// What was here originally in case there are issues.

//     return (
//         <>
//             <LightCard>
//                 <h1>
//                 {child.firstName} {child.lastName}
//                 </h1>
//                 <h3>Gender</h3>
//                 <p>{child.gender}</p>
//                 <h3>Age</h3>
//                 <p>{child.age}</p>
//                 <h3>Weight</h3>
//                 <p>{child.weight}</p>
//                 <h3>Height</h3>
//                 <p>{child.height}</p>
//                 <UpdateChildToggle ChildId={child.id} />
//             </LightCard>
//                 <LightCard>
//                     <h2>Immunization History</h2>
//                     <HistoryCard shots={shots}/>
//                 </LightCard>
//             <PermissionForm />
//         </>
//     );

// };

// export default ChildHome;
