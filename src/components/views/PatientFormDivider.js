import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import PatientRegistrationForm from "../forms/PatientRegistrationForm";
import PatientLoginForm from "../forms/PatientLoginForm";

const PatientFormDivider = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed="very" stackable>
      <Grid.Column>
        <PatientLoginForm />

        {/* <Button content="Login" primary /> */}
      </Grid.Column>

      <Grid.Column verticalAlign="middle">
        <PatientRegistrationForm />
        {/* <Button content="Sign up" icon="signup" size="big" /> */}
      </Grid.Column>
    </Grid>
    <Divider vertical>Or</Divider>
  </Segment>
);

export default PatientFormDivider;
