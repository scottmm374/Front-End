import React from "react";
import history from "../../history"
import api from "./api";
import { Button } from "./styledComponents";

function DeleteUser(props) {
  const handleDelete = () => {

    api()
      .delete(`user/patient/${props.id}`)
      .then(res => {
        history.push("/patient-home");
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
