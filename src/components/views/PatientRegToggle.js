import React from "react";
import { Image, Reveal } from "semantic-ui-react";
import PatientRegistrationForm from "../forms/PatientRegistrationForm";
import PatientReg from "../../images/PatientReg.png";

const RevealAddChild = () => (
  <Reveal animated="move">
    <Reveal.Content visible>
      <Image src={PatientReg} alt="Children skipping rope" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <PatientRegistrationForm />
    </Reveal.Content>
  </Reveal>
);

export default RevealAddChild;
