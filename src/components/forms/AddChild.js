import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field, useField } from "formik";
import * as Yup from "yup";
import api from "../utils/api";

const AddChild = ({ values, touched, errors }) => {
  console.log(values);
  const AddChildDiv = styled.div`
      margin: 0 auto;
      width: 50%;
      

      form {
        padding: 3%;
        border: solid 1px black;
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 50%;

      
  
      }
`;

  const InputDiv = styled.div`
    width: 45%;
    min-width: 200px;

    label {
      display: flex;
      flex-direction: column;

      &:first-child {
        font-weight: bold; 
        text-align: left; 
      }
    }
`;

  const AddChildButton = styled.button`
    margin: 2% 40%;
    padding: 20px;
    background-color: teal;
`;
  /*
  const radioChoices = [{ label: "Male", name: "male", id: "male", defaultChoice: true },
  { label: "Female", name: "female", id: "female", defaultChoice: false }];
  */
  return (
    <AddChildDiv>
      <h2>Add Child</h2>
      <Form>
        <InputDiv>
          <label>
            First Name
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
            />
            {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            Last Name
                 <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
            />
            {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            Age
                  <Field
              component="select"
              name="age"
              placeholder="Age (years)"
              value={values.age}
            >
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
          </label>
        </InputDiv>

        {/*
        <InputDiv>
          <label>
            Gender
            <div>
              <RadioButtons name="gender" choices={radioChoices} value={values.gender} />
              {touched.gender && errors.gender && <p>{errors.gender}</p>}
            </div>
          </label>
        </InputDiv>
        */}

        <InputDiv>  
          <label>
            Gender
            <Field
              type="text"
              name="gender"
              placeholder="Gender"
              value={values.gender}
            />
            {touched.gender && errors.gender && <p>{errors.gender}</p>}
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            Weight
                  <Field
              type="text"
              name="weight"
              placeholder="Weight (Lbs)"
              value={values.weight}
            />
            {touched.weight && errors.weight && <p>{errors.weight}</p>}
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            Height
                  <Field
              type="text"
              name="height"
              placeholder="Height (inches)"
              value={values.height}
            />
            {touched.height && errors.height && <p>{errors.height}</p>}
          </label>
        </InputDiv>
        <AddChildButton type="submit">Add Child</AddChildButton>
      </Form>
    </AddChildDiv>
  );
};
/* Couldn't get it to work right
function RadioButton(props) {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <>
      <input 
        id={props.choice.id}
        value={props.value}
        checked={props.value === "" ? props.choice.defaultChoice : props.choice.id === props.value  }
        {...field} 
        {...props}/>
      <label htmlFor={props.choice.id}>{props.choice.label}</label>
    </>
  );
};

function RadioButtons({value, error, touched, id, label}) {
  const [field] = useField(props);
  field.type = "radio";
  return (
    <>
      {props.choices.map((e) => {
        let checked;
        e.name === field.value ? checked = true : checked = e.defaultChoice;
        return (
          <RadioButton label="test" {...field} checked={checked} choice={e}/>
          
        );
      })}
    </>
  );
};
*/
const FormikAddChildForm = withFormik({
  mapPropsToValues({ firstName, lastName, age, gender, weight, height, patientEmail, patientPhone, isChild }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      age: age || "",
      gender: gender || "",
      weight: weight || "",
      height: height || "",
      patientEmail: patientEmail || "",
      patientPhone: patientPhone || "",
      isChild: isChild || true
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Enter first name."),
    lastName: Yup.string().required("Enter last name."),
    age: Yup.string().required("Select an age."),
    gender: Yup.string().required("Select a gender."),
    weight: Yup.string().required("Enter a weight in pounds."),
    height: Yup.string().required("Enter a height in inches."),
    patientEmail: Yup.string(),
    isChild: Yup.boolean()
  }),

  handleSubmit(values) {
    api()
      .post("/", values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(AddChild);

export default FormikAddChildForm;