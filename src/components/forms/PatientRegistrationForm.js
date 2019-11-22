import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import history from "../../history";
import * as yup from "yup";
import api from "../utils/api";
import {
  Button,
  LightCard,
  BetterField,
  NewLable,
  FormContainer,
  FlexWarp
} from "../utils/styledComponents.js";

function PatientRegistrationForm({ errors, touched, status, history }) {
  const [patientReg, setPatientReg] = useState([]);

  useEffect(() => {
    if (status) {
      setPatientReg([...patientReg, status]);
    }
    // eslint-disable-next-line
  }, [status]);

  // console.log("patientReg", patientReg);

  return (
    <LightCard>
      <Form>
        <FlexWarp>
          <FormContainer>
            <NewLable> Full Name</NewLable>
            {touched.userName && errors.userName && <p>{errors.title}</p>}
            <Field
              id="imForm"
              type="text"
              name="userName"
              placeholder="Full Name"
            />

            <NewLable>Email</NewLable>
            {touched.userEmail && errors.userEmail && <p>{errors.userEmail}</p>}
            <Field
              id="imForm"
              type="text"
              name="userEmail"
              placeholder="Email"
            />

            <NewLable>Password</NewLable>
            {touched.userPassword && errors.userPassword && (
              <p>{errors.userPassword}</p>
            )}
            <Field
              id="imForm"
              type="password"
              name="userPassword"
              placeholder="Password"
            />

            <Button type="submit">Submit</Button>
          </FormContainer>
        </FlexWarp>
      </Form>
    </LightCard>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
      // history: values.history,
      userName: values.userName || "",
      userEmail: values.userEmail || "",
      userPassword: values.userPassword || ""
    };
  },

  validationScheme: yup.object().shape({
    userName: yup
      .string()
      .matches(
        /^[\w]+$/,
        "Your username may only contain letters, numbers, and underscore. "
      )
      .min(3, "UserName must be at least characters")
      .required("Please enter your name"),
    userEmail: yup
      .string()
      .email()
      .required("Please enter valid email"),
    userPassword: yup
      .string()
      .min(6, "Your password must be at least 6 characters")
      .required("Please enter a password")
  }),

  handleSubmit: (values, { setStatus }) => {
    console.log(" REgistration", values);

    api()
      .post("/auth/user-register", values)
      .then(res => {
        setStatus(res.data);
        // Push throws server error
        history.push("/patient-login");

        console.log("register res", res.data);
      })
      .catch(err => {
        console.log("Registration error", err);
      });
  }
})(PatientRegistrationForm);
