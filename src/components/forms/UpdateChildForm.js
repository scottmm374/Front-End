import React, { useState, useEffect } from "react";
import api from "../utils/api";
import {
  Button,
  LightCard,
  NewLable,
  FormContainer,
  FlexWarp
} from "../utils/styledComponents.js";

const UpdateChildForm = props => {
  console.log("child props", props);

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

  console.log("updateChild", props);

  useEffect(() => {
    api()
      .get(`/user/patient/${props.ChildId}`)
      .then(res => {
        setEditChild(res.data);
        console.log("get child", res.data);
      })
      .catch(err => {
        console.log("get kid", err);
      });
  }, []);

  const handleUpdate = e => {
    e.preventDefault();
    api()
      .put(`/user/patient/${props.ChildId}`, editChild)
      .then(res => {
        props.setChild(editChild);
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
              id="imForm"
              type="text"
              name="patientEmail"
              placeholder="Parent Email"
              disabled
              value={editChild.patientEmail}
              onChange={handleChange}
            />

            <NewLable>Patient ID</NewLable>
            <input
              id="imForm"
              type="text"
              name="userId"
              disabled
              placeholder="Patient ID"
              value={editChild.userId}
              onChange={handleChange}
            />
            <NewLable>First Name</NewLable>
            <input
              id="imForm"
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={editChild.firstName}
              onChange={handleChange}
            />
            <NewLable>Last Name</NewLable>
            <input
              id="imForm"
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={editChild.lastName}
              onChange={handleChange}
            />
            <NewLable>Age</NewLable>
            <input
              id="imForm"
              type="text"
              name="age"
              placeholder="Age (years)"
              required
              value={editChild.age}
              onChange={handleChange}
            />

            <NewLable>Gender</NewLable>
            <input
              id="imForm"
              type="text"
              name="gender"
              placeholder="Gender"
              required
              value={editChild.gender}
              onChange={handleChange}
            />

            <NewLable>Weight</NewLable>
            <input
              id="imForm"
              type="text"
              name="weight"
              placeholder="Weight (Lbs)"
              required
              value={editChild.weight}
              onChange={handleChange}
            />
            <NewLable>Height</NewLable>
            <input
              id="imForm"
              type="text"
              name="height"
              placeholder="Height (inches)"
              required
              value={editChild.height}
              onChange={handleChange}
            />
            <Button type="submit" onClick={props.toggle}>
              Save Changes
            </Button>
          </FormContainer>
        </FlexWarp>
      </form>
    </LightCard>
  );
};

export default UpdateChildForm;
