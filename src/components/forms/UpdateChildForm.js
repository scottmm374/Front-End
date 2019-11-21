import React, { useState, useEffect } from "react";
// import history from "../../history";
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
  // const id = props.match.params.id;
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

  // const handleDelete = () => {
  //   api()
  //     .delete(`user/patient/${props.ChildId}`)
  //     .then(res => {
  //       // props.history.push("/");
  //       console.log("deleted", res.data);
  //     })
  //     .catch(err => {
  //       console.log("delete", err);
  //     });
  // };

  const handleUpdate = e => {
    e.preventDefault();
    api()
      // .put((`/user/patient/${props.match.params.id}`), editChild)
      .put(`/user/patient/${props.ChildId}`, editChild)
      .then(res => {
        props.setChild(editChild);
        //setEditChild(res.data);
        //window.location.reload();
        // props.history.push(`/child-account/${props.ChildId}`);
        
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
              value={editChild.firstName}
              onChange={handleChange}
            />
            <NewLable>Last Name</NewLable>
            <input
              id="imForm"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={editChild.lastName}
              onChange={handleChange}
            />
            <NewLable>Age</NewLable>
            <input
              id="imForm"
              type="text"
              name="age"
              placeholder="Age (years)"
              value={editChild.age}
              onChange={handleChange}
            />

            <NewLable>Gender</NewLable>
            <input
              id="imForm"
              type="text"
              name="gender"
              placeholder="Gender"
              value={editChild.gender}
              onChange={handleChange}
            />

            <NewLable>Weight</NewLable>
            <input
              id="imForm"
              type="text"
              name="weight"
              placeholder="Weight (Lbs)"
              value={editChild.weight}
              onChange={handleChange}
            />
            <NewLable>Height</NewLable>
            <input
              id="imForm"
              type="text"
              name="height"
              placeholder="Height (inches)"
              value={editChild.height}
              onChange={handleChange}
            />
            <Button type="submit">Save Changes</Button>
            {/* <Button onClick={handleDelete}>Delete</Button> */}
          </FormContainer>
        </FlexWarp>
      </form>
    </LightCard>
  );
};

export default UpdateChildForm;
