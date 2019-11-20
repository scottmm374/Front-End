import React, { useState, useEffect } from "react";
// import { withformik, form, input } from "formik";
import history from "../../history";
import * as Yup from "yup";
import api from "../utils/api";
import {
  ButtonAddChild,
  LightCardAddChild,
  label,
  // formContainerAddChild,
  FlexWarpAddChild
} from "../utils/styledComponents.js";

const UpdateChildForm = () => {
  const [editChild, setEditChild] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    weight: "",
    height: "",
    patientEmail: "mscott@gmail.com",
    patientPhone: "123456789",
    isChild: true,
    userId: 34
  });

  // const id = history.match.params.id

  const handleUpdate = e => {
    e.preventDefault();
    api()
      .put("/user/patient/22", editChild)
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

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <label>Patient Email</label>
        <input
          type="email"
          name="patientEmail"
          placeholder="Parent Email"
          value={editChild.patientEmail}
          onChange={handleChange}
        />
        <label>Patient phone</label>
        <input
          type="text"
          name="patientPhone"
          placeholder="Parent Phone"
          value={editChild.patientPhone}
          onChange={handleChange}
        />

        <label>Patient ID</label>
        <input
          type="text"
          name="userId"
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
