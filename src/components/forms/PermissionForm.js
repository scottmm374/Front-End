import React, { useState, useEffect } from "react";
// import { getParentId } from "../utils/api";
// import history from "../../history";
import api from "../utils/api";

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
    <div>
      <h1>Permission</h1>
      <form onSubmit={handlePermission}>
        <input
          type="text"
          name="medproId"
          placeholder="Med Id"
          value={permission.medproId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="patientId"
          placeholder="Child id"
          value={permission.id}
          onChange={handleChange}
        />
        {/* <label>
          
          <input
            type="radio"
            name="permission"
            value="true"
            checked={true}
            onChange={handleChange}
          />
        </label> */}

        <button>Give Permission</button>
      </form>
    </div>
  );
};

export default PermissionForm;
