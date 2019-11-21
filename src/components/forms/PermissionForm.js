import React, { useState, useEffect } from "react";
// import { getParentId } from "../utils/api";
// import history from "../../history";
import api from "../utils/api";
import {
  Button,
  LightCard,
  BetterField,
  NewLable,
  FormContainer,
  FlexWarp
} from "../utils/styledComponents.js";

const PermissionForm = props => {
  // const [updatePermission, setUpdatePermission] = useState({
  //   permission: true,
  //   patientId: 0,
  //   medproId: 0
  // });

  const [permission, setPermission] = useState({
    permission: true,
    patientId: null,
    medproId: null
  });

  // const id = props.params.match.id;
  //   console.log("token", getParentId());

  const handlePermission = e => {
    e.preventDefault();
    api()
      .post("perm/add", permission)
      .then(res => {
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

  //   console.log("permission", res.data);
  console.log("permission", permission);
  // console.log("patient", updatePermission);

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
            {/* <label>
           <NewLable htmlFor="vaccineDate"> Date Administered</NewLable>
          <input
            type="radio"
            name="permission"
            value="true"
            checked={true}
            onChange={handleChange}
          />
        </label> */}

            <Button>Give Permission</Button>
          </FormContainer>
        </FlexWarp>
      </form>
    </LightCard>
  );
};

export default PermissionForm;
