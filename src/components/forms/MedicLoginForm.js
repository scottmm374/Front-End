import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import api from "../utils/api";

function MedicLoginForm({ errors, touched, status }) {
  const [medLogin, setMedLogin] = useState([
    {
      medicEmail: "",
      medicPassword: ""
    }
  ]);

  useEffect(() => {
    if (status) {
      setMedLogin(...medLogin, status);
    }
  }, [status]);

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
        localStorage.setItem("token", res.data.payload);
        setStatus(res.data);
        console.log("Login med", res.data);
        // values.userLogin(res.data);
      })
      .catch(err => {
        console.log("Med login error", err);
      });
  }
})(MedicLoginForm);
