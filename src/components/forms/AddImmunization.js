import React from "react";
import {
  Button,
  LightCard,
  BetterField,
  NewLable,
  FormContainer,
  FlexWarp
} from "../utils/styledComponents.js";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import getMedToken from "../utils/medApi.js";

const AddImmunization = ({ touched, errors, isSubmitting }) => {
  return (
    <LightCard>
      <Form>
        <FlexWarp>
          <FormContainer>
            <NewLable htmlFor="vaccineName"> Immunization and Dose</NewLable>
            <Field
              type="text"
              name="vaccineName"
              placeholder="Example: Example: Hepatitis B  (2nd dose)"
              id="imForm"
            />
            {touched.vaccineName && errors.vaccineName && (
              <p>Please Add Date</p>
            )}
          </FormContainer>

          <FormContainer>
            <NewLable htmlFor="vaccineDate"> Date Administered</NewLable>
            <Field
              type="text"
              name="vaccineDate"
              placeholder="Example: 04/05/1995"
              id="imForm"
            />
            {touched.vaccineDate && errors.vaccineDate && (
              <p>Please Add Date</p>
            )}
          </FormContainer>

          <FormContainer>
            <NewLable htmlFor="vaccineLocation">
              {" "}
              Administered Location
            </NewLable>
            <Field
              type="text"
              name="vaccineLocation"
              placeholder="Example: Christis Medical - CA"
              id="imForm"
            />
            {touched.vaccineLocation && errors.vaccineLocation && (
              <p>Please Add Location</p>
            )}
          </FormContainer>

          <Button disabled={isSubmitting} type="submit">
            {" "}
            Add{" "}
          </Button>
        </FlexWarp>
      </Form>
    </LightCard>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      vaccineDate: values.vaccineDate || "",
      vaccineName: values.vaccineName || "",
      vaccineLocation: values.vaccineLocation || "",
      patientId: values.patientId
    };
  },
  validationSchema: yup.object().shape({
    vaccineDate: yup.string().required(),
    vaccineName: yup.string().required(),
    vaccineLocation: yup.string().required()
  }),
  //Post Works
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    getMedToken()
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
