import React from "react";
import history from "../../history";
import api from "./api";
import { DeleteButton } from "./styledComponents";

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
      <DeleteButton onClick={handleDelete}>Remove Child</DeleteButton>
    </>
  );
}

export default DeleteUser;
