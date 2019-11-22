import React, { useState } from "react";
import api from "../utils/api";
import {
  Button,
  LightCard,
  NewLable,
  FormContainer,
  FlexWarp
} from "../utils/styledComponents.js";

const PermissionForm = props => {
  const [permission, setPermission] = useState({
    permission: true,
    patientId: "",
    medproId: ""
  });

  const handlePermission = e => {
    e.preventDefault();
    api()
      .post("perm/add", permission)
      .then(res => {
        alert("Permission Granted");
        window.location.reload();
        console.log("perm", res.data);
      })
      .catch(err => {
        console.log("perm", err);
      });
  };

  const handleChange = e => {
    setPermission({ ...permission, [e.target.name]: e.target.value });
  };

  // console.log("permission", permission);

  return (
    <LightCard>
      <h1> Grant Medical Permission</h1>
      <form onSubmit={handlePermission}>
        <FlexWarp>
          <FormContainer>
            <NewLable>Medpro Id</NewLable>
            <input
              id="imForm"
              type="text"
              name="medproId"
              placeholder="MedPro Id"
              value={permission.medproId}
              onChange={handleChange}
            />
            <NewLable>Child Id</NewLable>
            <input
              id="imForm"
              type="text"
              name="patientId"
              placeholder="Child id"
              value={permission.id}
              onChange={handleChange}
            />

            <Button>Give Permission</Button>
          </FormContainer>
        </FlexWarp>
      </form>
    </LightCard>
  );
};

export default PermissionForm;
