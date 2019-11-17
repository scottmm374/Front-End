import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import api from "../utils/api";

function MedicLoginForm({ errors, touched, status }) {
  const [medLogin, setMedLogin] = useState([]);

  useEffect(() => {
    if (status) {
      setMedLogin([...medLogin, status]);
    }
  }, [status]);

  console.log("status", status);
  console.log("state", medLogin);

  return (
    <Form>
      <div>
        {touched.medicEmail && errors.medicEmail && <p>{errors.medicEmail}</p>}
        <Field type="text" name="medicEmail" placeholder="medicEmail" />
      </div>
      <div>
        {touched.medicPassword && errors.medicPassword && (
          <p>{errors.medicPassword}</p>
        )}
        <Field type="text" name="medicPassword" placeholder="medicPassword" />
      </div>
      <button type="submit">Login</button>
      <h3>New Provider?</h3> <Link to="med-register">Register</Link>
    </Form>
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
    console.log(" med login", values);

    api()
      .post("/auth/med-login", values)
      .then(res => {
        localStorage.setItem("medtoken", res.data.medtoken);
        setStatus(res.data);
        // props.history.push("/");
        console.log("Login med", res.data);
      })
      .catch(err => {
        console.log("Med login error", err);
      });
  }
})(MedicLoginForm);
