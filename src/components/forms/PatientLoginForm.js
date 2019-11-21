import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import history from "../../history";
import { Link } from "react-router-dom";
import * as yup from "yup";
import api from "../utils/api";

function PatientLoginForm({ errors, touched, status }) {
  const [patientLogin, setPatientLogin] = useState([]);

  useEffect(() => {
    if (status) {
      setPatientLogin([...patientLogin, status]);
    }
    // eslint-disable-next-line
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
      // history: values.history,
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
        localStorage.setItem("patientEmail", values.userEmail);
        // localStorage.setItem("parentId", res.data.id);
        setStatus(res.data);
        history.push(`/patient-home/${res.data.id}`);
        console.log("Login patient", res.data);
      })
      .catch(err => {
        console.log("Patient login error", err);
      });
  }
})(PatientLoginForm);
