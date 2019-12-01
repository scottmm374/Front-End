import React from "react";
import { Image, Reveal } from "semantic-ui-react";
import MedRegistrationForm from "../forms/MedRegistrationForm";
import MedReg from "../../images/Register.png";

const RevealAddChild = () => (
  <Reveal animated="move">
    <Reveal.Content visible>
      <Image src={MedReg} alt="Children skipping rope" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <MedRegistrationForm />
    </Reveal.Content>
  </Reveal>
);

export default RevealAddChild;
