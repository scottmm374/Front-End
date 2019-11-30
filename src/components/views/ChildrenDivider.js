import React, { useContext } from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import AddChild from "../forms/AddChild";
import ParentHome from "./ParentHome";
import { PatientInfoContext } from "../../context/PatientInfoContext";

const ChildrenDivider = props => {
  const addPatient = useContext(PatientInfoContext);
  return (
    <div>
      <h1 className="patient">{addPatient.message}</h1>
      <p>{addPatient.email}</p>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <ParentHome />

            {/* <Button content="Login" primary /> */}
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <AddChild />
            {/* <Button content="Sign up" icon="signup" size="big" /> */}
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </div>
  );
};

export default ChildrenDivider;
