import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import history from "../../history";
import { Link } from "react-router-dom";
import * as yup from "yup";
import medApi from "../utils/medApi";
import {
  LightCard,
  FlexWarp,
  Button,
  FormContainer,
  NewLable
} from "../utils/styledComponents";

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
    <LightCard>
      <Form>
        <FlexWarp>
          <FormContainer>
            <NewLable>Email</NewLable>
            {touched.medicEmail && errors.medicEmail && (
              <p>{errors.medicEmail}</p>
            )}
            <Field
              id="imForm"
              type="text"
              name="medicEmail"
              placeholder="medicEmail"
            />
          </FormContainer>
          <FormContainer>
            <NewLable>Password</NewLable>
            {touched.medicPassword && errors.medicPassword && (
              <p>{errors.medicPassword}</p>
            )}
            <Field
              id="imForm"
              type="password"
              name="medicPassword"
              placeholder="medicPassword"
            />
          </FormContainer>
          <Button type="submit">Login</Button>
          <h3>New Provider?</h3> <Link to="med-register">Register</Link>
        </FlexWarp>
      </Form>
    </LightCard>
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
        setStatus(res.data);

        history.push("/med-account");
        console.log("Login med", res.data);
      })
      .catch(err => {
        console.log("Med login error", err);
      });
  }
})(MedicLoginForm);
