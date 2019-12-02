import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import history from "../../history";
import { Link } from "react-router-dom";
import * as yup from "yup";
import medApi from "../utils/medApi";
import styled from "styled-components";
import { Button } from "../utils/styledComponents";

// export const Button = styled.button`
//   background: #ff9d65;
//   color: #ffffff;
//   &:hover {
//     background: #ffb286;
//     border: 1px solid #ffffff;
//     color: #ffffff;
//   }
//   border-radius: 4px;
//   border: none;
//   margin-top: 21px;
//   padding: 14px 25px;
//   font-weight: bold;
//   font-size: 16px;
//   max-height: 50px;
// `;

const NForm = styled(Form)`
  margin-top: 35px;
  display: flex;
  max-width: 65%;
  justify-content: center;
  flex-direction: column;
`;

const NewField = styled(Field)`
  background: white;
  &:hover {
    background: #e1f5ee;
  }
`;

function MedicLoginForm({ errors, touched, status }) {
  const [medLogin, setMedLogin] = useState([]);

  useEffect(() => {
    if (status) {
      setMedLogin([...medLogin, status]);
    }
    // eslint-disable-next-line
  }, [status]);

  // console.log("status", status);
  // console.log("state", medLogin);

  return (
    // <LightCard>
    <div className="form-cont">
      <NForm>
        {/* <FlexWarp>
          <FormContainer>
            <NewLable>Email</NewLable> */}
        {touched.medicEmail && errors.medicEmail && <p>{errors.medicEmail}</p>}
        <NewField
          className="med-Form"
          type="text"
          name="medicEmail"
          placeholder="Email"
        />
        {/* </FormContainer>
          <FormContainer> */}
        {/* <NewLable>Password</NewLable> */}
        {touched.medicPassword && errors.medicPassword && (
          <p>{errors.medicPassword}</p>
        )}
        <NewField
          className="med-Form"
          type="password"
          name="medicPassword"
          placeholder="Password"
        />
        {/* </FormContainer> */}
        <Button type="submit">Login</Button>
        {/* <h3>New Provider?</h3> <Link to="med-register">Register</Link> */}
        {/* </FlexWarp> */}
      </NForm>
    </div>
    // </LightCard>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
      medicEmail: values.medicEmail || "",
      medicPassword: values.medicPassword || ""
    };
  },

  validationScheme: yup.object().shape({
    medicEmail: yup
      .string()
      .email()
      .required("Please enter valid email"),
    medicPassword: yup
      .string()
      .min(6, "Your password must be at least 6 characters")
      .required("Please enter a password")
  }),

  handleSubmit: (values, { setStatus }) => {
    // console.log(" med login", values);

    medApi()
      .post("/auth/med-login", values)
      .then(res => {
        localStorage.setItem("medtoken", res.data.medtoken);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("message", res.data.message);
        setStatus(res.data);

        history.push("/med-account");
        console.log("Login med", res.data);
      })
      .catch(err => {
        console.log("Med login error", err);
      });
  }
})(MedicLoginForm);
