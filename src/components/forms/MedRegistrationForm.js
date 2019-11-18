import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import history from "../../history";
import * as yup from "yup";
import medApi from "../utils/medApi";

function MedRegistrationForm({ errors, touched, status }) {
  const [medReg, setMedReg] = useState([]);

  useEffect(() => {
    if (status) {
      setMedReg([...medReg, status]);
    }
    // eslint-disable-next-line
  }, [status]);

  return (
    <Form>
      <div>
        {touched.medicFirstName && errors.medicFirstName && (
          <p>{errors.medicFirstName}</p>
        )}
        <Field type="text" name="medicFirstName" placeholder="First Name" />
      </div>
      <div>
        {touched.medicLastName && errors.medicLastName && (
          <p>{errors.medicLastName}</p>
        )}
        <Field type="text" name="medicLastName" placeholder="Last Name" />
      </div>
      <div>
        {touched.medicEmail && errors.medicEmail && <p>{errors.medicEmail}</p>}
        <Field type="text" name="medicEmail" placeholder="Email" />
      </div>
      <div>
        {touched.medicPassword && errors.medicPassword && (
          <p>{errors.medicPassword}</p>
        )}
        <Field type="text" name="medicPassword" placeholder="medicPassword" />
      </div>
      <div>
        {touched.company && errors.company && <p>{errors.company}</p>}
        <Field type="text" name="company" placeholder="company" />
      </div>
      <div>
        {touched.position && errors.position && <p>{errors.position}</p>}
        <Field type="text" name="position" placeholder="position" />
      </div>

      <button type="submit">Submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
      // history: values.history,
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
    console.log("Med Reg", values);

    medApi()
      .post("/auth/med-register", values)
      .then(res => {
        setStatus(res.data);
        // this causes Nav to show incorrect navigation and saves as Token rather then medtoken
        history.push("/med-login");
        console.log(" med register res", res.data);
      })
      .catch(err => {
        console.log(" med Registration error", err);
      });
  }
})(MedRegistrationForm);
