import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import history from "../../history";
import * as yup from "yup";
import medApi from "../utils/medApi";
import styled from "styled-components";
import { Button } from "../utils/styledComponents.js";

const NForm = styled(Form)`
  margin-top: 35px;
  display: flex;
  max-width: 65%;
  justify-content: center;
  flex-direction: column;
`;

const NewField = styled(Field)`
  background: white;
  &:hover {
    background: #e1f5ee;
  }
`;

function MedRegistrationForm({ errors, touched, status }) {
  const [medReg, setMedReg] = useState([]);

  useEffect(() => {
    if (status) {
      setMedReg([...medReg, status]);
    }
    // eslint-disable-next-line
  }, [status]);

  return (
    // <LightCard>
    <div className="form-cont">
      <NForm>
        {/* <FlexWarp>
          <FormContainer>
            <NewLable> First Name</NewLable> */}
        {touched.medicFirstName && errors.medicFirstName && (
          <p>{errors.medicFirstName}</p>
        )}
        <NewField
          className="med-Form"
          type="text"
          name="medicFirstName"
          placeholder="First Name"
        />

        {/* <NewLable> Last Name</NewLable> */}
        {touched.medicLastName && errors.medicLastName && (
          <p>{errors.medicLastName}</p>
        )}
        <NewField
          className="med-Form"
          type="text"
          name="medicLastName"
          placeholder="Last Name"
        />

        {/* <NewLable> Email</NewLable> */}
        {touched.medicEmail && errors.medicEmail && <p>{errors.medicEmail}</p>}
        <NewField
          className="med-Form"
          type="text"
          name="medicEmail"
          placeholder="Email"
        />

        {/* <NewLable>Password</NewLable> */}
        {touched.medicPassword && errors.medicPassword && (
          <p>{errors.medicPassword}</p>
        )}
        <NewField
          className="med-Form"
          type="password"
          name="medicPassword"
          placeholder="Password"
        />
        {/* <NewLable> Company</NewLable> */}

        {touched.company && errors.company && <p>{errors.company}</p>}
        <NewField
          className="med-Form"
          type="text"
          name="company"
          placeholder="Company"
        />

        {/* <NewLable>Postion</NewLable> */}
        {touched.position && errors.position && <p>{errors.position}</p>}
        <NewField
          className="med-Form"
          type="text"
          name="position"
          placeholder="Position"
        />

        <Button type="submit">Submit</Button>
        {/* </FormContainer>
        </FlexWarp> */}
      </NForm>
    </div>
    // </LightCard>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
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
    // console.log("Med Reg", values);

    medApi()
      .post("/auth/med-register", values)
      .then(res => {
        setStatus(res.data);
        history.push("/med-login");
        console.log(" med register res", res.data);
      })
      .catch(err => {
        console.log(" med Registration error", err);
      });
  }
})(MedRegistrationForm);
