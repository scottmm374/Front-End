import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import api from "../utils/api";

function PatientRegistrationForm({ errors, touched }) {
  return (
    <Form>
      <div>
        {touched.userName && errors.userName && <p>{errors.title}</p>}
        <Field type="text" name="userName" placeholder="userName" />
      </div>
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
      <button type="submit">Submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
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

  handleSubmit: values => {
    console.log(" REgistration", values);

    api()
      .post("/auth/user-register", {
        userName: values.userName,
        userEmail: values.userEmail,
        userPassword: values.userPassword
      })
      .then(res => {
        console.log("register res", res.data);
        // values.userLogin(res.data);
      })
      .catch(err => {
        console.log("Registration error", err);
      });
  }
})(PatientRegistrationForm);
