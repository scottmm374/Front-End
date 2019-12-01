import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import { Container, Row } from "reactstrap";
import MedicLoginForm from "../forms/MedicLoginForm";
import MedRegistrationForm from "../forms/MedRegistrationForm";
import MedRegToggle from "../views/MedRegToggle";

const MedFormDivider = () => (
  <Container>
    <Row>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <MedicLoginForm />

            {/* <Button content="Login" primary /> */}
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <MedRegToggle />
            {/* <MedRegistrationForm /> */}
            {/* <Button content="Sign up" icon="signup" size="big" /> */}
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </Row>
  </Container>
);

export default MedFormDivider;
