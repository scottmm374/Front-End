import React from "react";

import api from "./api";
import { Button } from "./styledComponents";

function DeleteUser(props) {
  console.log("deleteProp", props.id);
  const handleDelete = () => {
    api()
      .delete(`/user/patient/${props.id}`)
      .then(res => {
        props.history.push("/patient-home");
        console.log("deleted", res.data);
      })
      .catch(err => {
        console.log("delete", err);
      });
  };

  return (
    <>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
}

export default DeleteUser;
