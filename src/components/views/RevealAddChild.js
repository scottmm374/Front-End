import React from "react";
import { Image, Reveal } from "semantic-ui-react";
import AddChild from "../forms/AddChild";
import svg from "../../images/children-playing.png";

const RevealAddChild = () => (
  <Reveal animated="move">
    <Reveal.Content visible>
      <Image src={svg} alt="Children skipping rope" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <AddChild />
    </Reveal.Content>
  </Reveal>
);

export default RevealAddChild;
