import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import UpdateChildForm from "../forms/UpdateChildForm";
import styled from "styled-components";

const NewButton = styled(Button)`
  background: #32ddaa;
  color: #ffffff;
  &:hover {
    background: #ffffff;
    border: 1px solid #32ddaa;
    color: #32ddaa;
  }
  border-radius: 4px;
  border: none;
  margin: auto 15px;
  padding: 14px 25px;
  font-weight: bold;
  font-size: 16px;
  max-height: 50px;
`;

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NewButton onClick={toggle} style={{ marginBottom: "1rem" }}>
        Update Child Info
      </NewButton>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <UpdateChildForm ChildId={props.ChildId} />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Example;
