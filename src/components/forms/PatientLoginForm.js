import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import api from "../utils/api";

function PatientLoginForm({ errors, touched, status }) {
  const [patientLogin, setPatientLogin] = useState([]);

  useEffect(() => {
    if (status) {
      setPatientLogin([...patientLogin, status]);
    }
  }, [status]);

  return (
    <Form>
      <div>
        {touched.userEmail && errors.userEmail && <p>{errors.userEmail}</p>}
        <Field type="text" name="userEmail" placeholder="userEmail" />
      </div>
      <div>
        {touched.userPassword && errors.userPassword && (
          <p>{errors.userPassword}</p>
        )}
        <Field type="text" name="userPassword" placeholder="userPassword" />
      </div>
      <button type="submit">Login</button>
      <h3>New Patient?</h3> <Link to="patient-register">Register</Link>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
      userEmail: values.userEmail || "",
      userPassword: values.userPassword || ""
    };
  },

  validationScheme: yup.object().shape({
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
    console.log(" patient login", values);

    api()
      .post("/auth/user-login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setStatus(res.data);
        // props.history.push('/')
        console.log("Login patient", res.data);
      })
      .catch(err => {
        console.log("Patient login error", err);
      });
  }
})(PatientLoginForm);
