import React, { useState, useEffect } from "react";
import api from "../utils/api";
import {
  ButtonAddChild,
  LightCardAddChild,
  label,
  // formContainerAddChild,
  FlexWarpAddChild
} from "../utils/styledComponents.js";

const UpdateChildForm = props => {
  const [editChild, setEditChild] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    patientEmail: "",
    isChild: true,
    userId: ""
  });

  console.log("history", props);

  useEffect(() => {
    api()
      .get("/user/patient/49")
      .then(res => {
        setEditChild(res.data);
        console.log("get child", res.data);
      })
      .catch(err => {
        console.log("get kid", err);
      });
  }, []);

  // const patientEmail = localStorage.getItem("userEmail");
  // const userId = localStorage.getItem("id");
  // const userEmail = localStorage.getItem("userEmail")

  // const id = history.match.params.id

  const handleUpdate = e => {
    e.preventDefault();
    api()
      .put("/user/patient/49", editChild)
      .then(res => {
        console.log("editChild", res.data);
      })
      .catch(err => {
        console.log("edit child", err);
      });
  };

  const handleChange = e => {
    setEditChild({ ...editChild, [e.target.name]: e.target.value });
  };

  console.log("editChild", editChild);

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <label>Patient Email</label>
        <input
          type="text"
          name="patientEmail"
          placeholder="Parent Email"
          disabled
          value={editChild.patientEmail}
          onChange={handleChange}
        />

        <label>Patient ID</label>
        <input
          type="text"
          name="userId"
          disabled
          placeholder="Patient ID"
          value={editChild.userId}
          onChange={handleChange}
        />
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={editChild.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={editChild.lastName}
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          type="text"
          name="age"
          placeholder="Age (years)"
          value={editChild.age}
          onChange={handleChange}
        />

        <label>Gender</label>
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={editChild.gender}
          onChange={handleChange}
        />

        <label>Weight</label>
        <input
          type="text"
          name="weight"
          placeholder="Weight (Lbs)"
          value={editChild.weight}
          onChange={handleChange}
        />
        <label>Height</label>
        <input
          type="text"
          name="height"
          placeholder="Height (inches)"
          value={editChild.height}
          onChange={handleChange}
        />
        <button type="submit">Save Edit</button>
      </form>
    </div>
  );
};

export default UpdateChildForm;
