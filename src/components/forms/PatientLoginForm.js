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
        setStatus(res.data);
        history.push("/patient-account");

        // ! throws error (Patient login error Error: "Element type is invalid: expected a string (for built-in components)
        //* values.history.push("/patient-account"); Note Registration works fine
        //  or a class/function (for composite components) but
        //  got: object. You likely forgot to export your
        //  component from the file it's defined in,
        //  or you might have mixed up default and named imports.

        // Check the render method of `Context.Consumer`.")

        // ! Error: Element type is invalid: expected a string (for built-in components)
        //* history.push("/patient-account"); Note Registration works fine
        // or a class/function (for composite components)
        // but got: object. You likely forgot to export your
        // component from the file it's defined in, or you might have mixed up default and named imports.
        // Check the render method of `Context.Consumer`.
        // history.push("/patient-account");
        console.log("Login patient", res.data);
      })
      .catch(err => {
        console.log("Patient login error", err);
      });
  }
})(PatientLoginForm);
