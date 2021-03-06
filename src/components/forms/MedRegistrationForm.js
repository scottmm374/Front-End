import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import history from "../../history";
import * as yup from "yup";
import medApi from "../utils/medApi";
import {
  Button,
  LightCard,
  NewLable,
  FormContainer,
  FlexWarp
} from "../utils/styledComponents.js";

function MedRegistrationForm({ errors, touched, status }) {
  const [medReg, setMedReg] = useState([]);

  useEffect(() => {
    if (status) {
      setMedReg([...medReg, status]);
    }
    // eslint-disable-next-line
  }, [status]);

  return (
    <LightCard>
      <Form>
        <FlexWarp>
          <FormContainer>
            <NewLable> First Name</NewLable>
            {touched.medicFirstName && errors.medicFirstName && (
              <p>{errors.medicFirstName}</p>
            )}
            <Field
              id="imForm"
              type="text"
              name="medicFirstName"
              placeholder="First Name"
            />

            <NewLable> Last Name</NewLable>
            {touched.medicLastName && errors.medicLastName && (
              <p>{errors.medicLastName}</p>
            )}
            <Field
              id="imForm"
              type="text"
              name="medicLastName"
              placeholder="Last Name"
            />

            <NewLable> Email</NewLable>
            {touched.medicEmail && errors.medicEmail && (
              <p>{errors.medicEmail}</p>
            )}
            <Field
              id="imForm"
              type="text"
              name="medicEmail"
              placeholder="Email"
            />

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
            <NewLable> Company</NewLable>

            {touched.company && errors.company && <p>{errors.company}</p>}
            <Field
              id="imForm"
              type="text"
              name="company"
              placeholder="company"
            />

            <NewLable>Postion</NewLable>
            {touched.position && errors.position && <p>{errors.position}</p>}
            <Field
              id="imForm"
              type="text"
              name="position"
              placeholder="position"
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
      medicFirstName: values.medicFirstName || "",
      medicLastName: values.medicLastName || "",
      medicEmail: values.medicEmail || "",
      medicPassword: values.medicPassword || "",
      company: values.company || "",
      position: values.position || ""
    };
  },

  validationScheme: yup.object().shape({
    medicFirstName: yup.string().required("Please enter first name"),
    medicLastName: yup.string().required("Please enter last name"),
    medicEmail: yup
      .string()
      .email()
      .required("Please enter valid email"),
    medicPassword: yup
      .string()
      .min(6, "Your password must be at least 6 characters")
      .required("Please enter a password"),
    company: yup
      .string()
      .min(3, "company name must be at least 3 characters")
      .required("Please enter your company name"),
    position: yup.string().required("Please enter your position")
  }),

  handleSubmit: (values, { setStatus }) => {
    // console.log("Med Reg", values);

    medApi()
      .post("/auth/med-register", values)
      .then(res => {
        setStatus(res.data);
        history.push("/med-login");
        console.log(" med register res", res.data);
      })
      .catch(err => {
        console.log(" med Registration error", err);
      });
  }
})(MedRegistrationForm);
