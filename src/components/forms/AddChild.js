import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const AddChild = ({values, touched, errors}) => {

    const AddChildDiv = styled.div`
        width: 80%;

        Form {
            display: flex;
            flex-direction: column;
   
        }
    `;

    return (
        <AddChildDiv>
            <h2>Add Child</h2>
            <Form>
                <Field
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={values.fname}
                 />
                 <Field
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={values.lname}
                 />
                 <Field
                    type="text"
                    name="fname"
                    placeholder="Age (years)"
                    value={values.age}
                 />
                 <Field
                    type="text"
                    name="gender"
                    placeholder="gender"
                    value={values.gender}
                 />
                 <Field
                    type="text"
                    name="weight"
                    placeholder="Weight (Lbs)"
                    value={values.weight}
                 />
                 <Field
                    type="text"
                    name="height"
                    placeholder="Height (inches)"
                    value={values.height}
                 />
            </Form>
        </AddChildDiv>
    );
};

const FormikAddChildForm = withFormik({
    mapPropsToValues({ fname, lname, age, gender, weight, height }) {
      return {
        fname: fname || "",
        lname: lname || "",
        age: age || "",
        gender: gender || "",
        weight: weight || "",
        height: height || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      fname: Yup.string(),
      lname: Yup.string(),
      age: Yup.boolean(),
      gender: Yup.string(),
      weight: Yup.string(),
      height: Yup.string()
    }),
  
    handleSubmit(values) {
      axios
        .post("localhost:3000", values)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  })(AddChild);

export default FormikAddChildForm;