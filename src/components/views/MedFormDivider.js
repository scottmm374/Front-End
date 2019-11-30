import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import MedicLoginForm from "../forms/MedicLoginForm";
import MedRegistrationForm from "../forms/MedRegistrationForm";

const MedFormDivider = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed="very" stackable>
      <Grid.Column>
        <MedicLoginForm />

        {/* <Button content="Login" primary /> */}
      </Grid.Column>

      <Grid.Column verticalAlign="middle">
        <MedRegistrationForm />
        {/* <Button content="Sign up" icon="signup" size="big" /> */}
      </Grid.Column>
    </Grid>
    <Divider vertical>Or</Divider>
  </Segment>
);

export default MedFormDivider;
