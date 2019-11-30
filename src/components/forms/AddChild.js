import React from "react";
//import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import api from "../utils/api";
import styled from "styled-components";
import { Card, CardTitle, CardBody } from "reactstrap";
import {
  LightCard
  // NewLable,
  // FormContainer
  // Card
} from "../utils/styledComponents.js";

export const Button = styled.button`
  background: #ff9d65;
  color: #ffffff;
  &:hover {
    background: #ffb286;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  border-radius: 4px;
  border: none;
  margin: auto 15px;
  padding: 14px 25px;
  font-weight: bold;
  font-size: 16px;
  max-height: 50px;
`;

const NewCard = styled(Card)`
  max-width: 100%;
`;

const AddChild = ({ values, touched, errors }) => {
  console.log(values);
  return (
    // <NewCard>
    <div className="form">
      <Form>
        <CardTitle className="patient">Add Child</CardTitle>
        <CardBody>
          {/* <FormContainer> */}
          {/* {/* <NewLable htmlFor="firstName">First Name</NewLable> */}
          <Field
            type="text"
            name="firstName"
            placeholder="First Name"
            id="imForm"
          />
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
          {/* </FormContainer> */}
          {/* <FormContainer> */}
          {/*  <NewLable htmlFor="lastName">Last Name</NewLable> */}
          <Field
            type="text"
            name="lastName"
            placeholder="Last Name"
            id="imForm"
          />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
          {/* </FormContainer> */}
          {/* <FormContainer> */}
          {/*  <NewLable htmlFor="age">Age</NewLable> */}
          <Field type="text" name="age" placeholder="Age (years)" id="imForm">
            {/* <option>Age (years)</option>
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
              <option value="17">17</option> */}
          </Field>
          {touched.age && errors.age && <p>{errors.age}</p>}
          {/* </FormContainer> */}
          {/* <FormContainer> */}
          {/*  <NewLable htmlFor="gender">Gender</NewLable> */}
          <Field
            component="select"
            name="gender"
            placeholder="Gender"
            id="imForm"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          {touched.gender && errors.gender && <p>{errors.gender}</p>}
          {/* </FormContainer> */}
          {/* <FormContainer> */}
          {/*  <NewLable htmlFor="weight">Weight</NewLable> */}
          <Field
            type="text"
            name="weight"
            placeholder="Weight (Lbs)"
            id="imForm"
          />
          {touched.weight && errors.weight && <p>{errors.weight}</p>}
          {/* </FormContainer> */}
          {/* <FormContainer> */}
          {/*  <NewLable htmlFor="height">Height</NewLable> */}
          <Field
            type="text"
            name="height"
            placeholder="Height (inches)"
            id="imForm"
          />
          {touched.height && errors.height && <p>{errors.height}</p>}
          {/* </FormContainer> */}
          <Button type="submit">Add</Button>
        </CardBody>
      </Form>
    </div>
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
    isChild,
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
