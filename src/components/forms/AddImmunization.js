import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import api from "../utils/api.js";

const AddImmunization = ({ touched, errors, isSubmitting }) => {
  return (
    <div>
      <Form>
        <div>
          <label htmlFor="date"> Date Administered</label>
          <Field type="text" name="date" placeholder="Example: 04/05/1995" />
          {touched.date && errors.date && <p>Please Add Date</p>}
        </div>

        <div>
          <label htmlFor="immunization"> Immunization and Dose</label>
          <Field
            type="text"
            name="immunization"
            placeholder="Example: Example: Hepatitis B  (2nd dose)"
          />
          {touched.immunization && errors.immunization && (
            <p>Please Add Date</p>
          )}
        </div>

        <div>
          <label htmlFor="location"> Administered Location</label>
          <Field
            type="text"
            name="location"
            placeholder="Example: Christis Medical - CA"
          />
          {touched.location && errors.location && <p>Please Add Location</p>}
        </div>

        <button disabled={isSubmitting} type="submit">
          {" "}
          Add{" "}
        </button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      date: values.date || "",
      immunization: values.immunization || "",
      location: values.location || ""
    };
  },
  validationSchema: yup.object().shape({
    date: yup.string().required(),
    immunization: yup.string().required(),
    location: yup.string().required()
  }),
  //Event Handler needs an endpoint to .post() to & a completed .then()
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    api()
      .post("/record/addImmunization", values)
      .then(res => {
        console.log("it worked:", res.data);
      })
      .catch(err => {
        console.log("error:", err);
        setSubmitting(false);
        resetForm();
      });
  }
})(AddImmunization);
