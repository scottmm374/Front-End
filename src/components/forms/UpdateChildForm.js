import React, { useState, useEffect } from "react";
import history from "../../history";
import api from "../utils/api";
import {
  Button,
  LightCard,
  BetterField,
  NewLable,
  FormContainer,
  FlexWarp
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
        history.push(`/patient-home/${res.data.id}`);
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
    <LightCard>
      <form onSubmit={handleUpdate}>
        <FlexWarp>
          <FormContainer>
            <NewLable>Parent Email</NewLable>
            <input
              type="text"
              name="patientEmail"
              placeholder="Parent Email"
              disabled
              value={editChild.patientEmail}
              onChange={handleChange}
            />

            <NewLable>Patient ID</NewLable>
            <input
              type="text"
              name="userId"
              disabled
              placeholder="Patient ID"
              value={editChild.userId}
              onChange={handleChange}
            />
            <NewLable>First Name</NewLable>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={editChild.firstName}
              onChange={handleChange}
            />
            <NewLable>Last Name</NewLable>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={editChild.lastName}
              onChange={handleChange}
            />
            <NewLable>Age</NewLable>
            <input
              type="text"
              name="age"
              placeholder="Age (years)"
              value={editChild.age}
              onChange={handleChange}
            />

            <NewLable>Gender</NewLable>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={editChild.gender}
              onChange={handleChange}
            />

            <NewLable>Weight</NewLable>
            <input
              type="text"
              name="weight"
              placeholder="Weight (Lbs)"
              value={editChild.weight}
              onChange={handleChange}
            />
            <NewLable>Height</NewLable>
            <input
              type="text"
              name="height"
              placeholder="Height (inches)"
              value={editChild.height}
              onChange={handleChange}
            />
            <Button type="submit">Save Changes</Button>
          </FormContainer>
        </FlexWarp>
      </form>
    </LightCard>
  );
};

export default UpdateChildForm;
