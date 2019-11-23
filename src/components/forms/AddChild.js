import React from "react";
//import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import api from "../utils/api";
import {
  ButtonAddChild,
  LightCardAddChild,
  BetterField,
  NewLable,
  FormContainerAddChild,
  FlexWarpAddChild
} from "../utils/styledComponents.js";

const AddChild = ({ values, touched, errors }) => {
  console.log(values);
  return (
    // <LightCardAddChild>
    <Form>
      <FlexWarpAddChild>
        <FormContainerAddChild>
          <NewLable htmlFor="firstName">First Name</NewLable>
          <Field type="text" name="firstName" placeholder="First Name" />
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        </FormContainerAddChild>

        <FormContainerAddChild>
          <NewLable htmlFor="lastName">Last Name</NewLable>
          <Field type="text" name="lastName" placeholder="Last Name" />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
        </FormContainerAddChild>

        <FormContainerAddChild>
          <NewLable htmlFor="age">Age</NewLable>
          <Field component="select" name="age" placeholder="Age (years)">
            <option>Age (years)</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
          </Field>
          {touched.age && errors.age && <p>{errors.age}</p>}
        </FormContainerAddChild>

        <FormContainerAddChild>
          <NewLable htmlFor="gender">Gender</NewLable>
          <Field component="select" name="gender" placeholder="Gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          {touched.gender && errors.gender && <p>{errors.gender}</p>}
        </FormContainerAddChild>

        <FormContainerAddChild>
          <NewLable htmlFor="weight">Weight</NewLable>
          <Field type="text" name="weight" placeholder="Weight (Lbs)" />
          {touched.weight && errors.weight && <p>{errors.weight}</p>}
        </FormContainerAddChild>
        <FormContainerAddChild>
          <NewLable htmlFor="height">Height</NewLable>
          <Field type="text" name="height" placeholder="Height (inches)" />
          {touched.height && errors.height && <p>{errors.height}</p>}
        </FormContainerAddChild>
        <ButtonAddChild type="submit">Add</ButtonAddChild>
      </FlexWarpAddChild>
    </Form>
    // </LightCardAddChild >
  );
};

const FormikAddChildForm = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    age,
    gender,
    weight,
    height,
    patientEmail,
    /*patientPhone,*/ isChild,
    userId
  }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      age: age || "",
      gender: gender || "",
      weight: weight || "",
      height: height || "",
      patientEmail: patientEmail || "",
      //patientPhone: patientPhone || "",
      isChild: isChild || true,
      userId: userId || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Enter first name."),
    lastName: Yup.string().required("Enter last name."),
    age: Yup.string().required("Select an age."),
    gender: Yup.string().required("Select a gender."),
    weight: Yup.string().required("Enter a weight in pounds."),
    height: Yup.string().required("Enter a height in inches."),
    patientEmail: Yup.string().required("Please enter Parents Email")
    /*patientPhone: Yup.string(),*/
  }),

  handleSubmit(values, { props, resetForm }) {
    console.log(values);
    api()
      .post("/user/addpatient", values)
      .then(res => {
        console.log(res);
        resetForm();
        props.setRefresh(true);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(AddChild);

export default FormikAddChildForm;
