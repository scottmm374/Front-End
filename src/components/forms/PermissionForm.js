import React, { useState, useEffect } from "react";
// import { getParentId } from "../utils/api";
// import history from "../../history";
import api from "../utils/api";

const PermissionForm = props => {
  const [patient, setPatient] = useState();
  const [permission, setPermission] = useState({
    permission: false,
    patientId: 0,
    medproId: 0
  });

  const id = props.params.match.id;
  //   console.log("token", getParentId());

  useEffect(() => {
    api()
      .get(`/user/${id}`) // put {props.match.params.id} when we have things linked up.
      .then(res => {
        setPatient(res.data);
      })
      .catch(err => {
        console.log("patient-child", err);
      });
  }, []);

  //   console.log("permission", res.data);
  console.log("PatientState", patient);

  return (
    <div>
      <form>
        <input type="text" name="medproId" value="medproId" />
        <input type="text" name="patientId" value={id} />
      </form>
    </div>
  );
};

export default PermissionForm;
