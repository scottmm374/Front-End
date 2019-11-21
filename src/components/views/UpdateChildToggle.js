import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import UpdateChildForm from "../forms/UpdateChildForm";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Update Child Info
      </Button>
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
