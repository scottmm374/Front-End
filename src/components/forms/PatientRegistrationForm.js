import React, { useState } from "react";

import history from "../../history";
import * as yup from "yup";
import api from "../utils/api";
import styled from "styled-components";

const NForm = styled.form`
  margin-top: 35px;
  display: flex;
  max-wclassnameth: 65%;
  justify-content: center;
  flex-direction: column;
`;

const NewInput = styled.input`
  background: white;
  &:hover {
    background: #fdebe1;
  }
`;

export const Button = styled.button`
  background: #ff9d65;
  color: #ffffff;
  &:hover {
    background: #ffb286;
    border: 1px solclassName #ffffff;
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

function PatientRegistrationForm(props) {
  const [patientReg, setPatientReg] = useState({
    userEmail: "",
    userPassword: "",
    userName: ""
  });

  // const valclassNameationScheme = yup.object().shape({
  //   userName: yup
  //     .string()
  //     .matches(
  //       /^[\w]+$/,
  //       "Your username may only contain letters, numbers, and underscore. "
  //     )
  //     .min(3, "UserName must be at least characters")
  //     .required("Please enter your name"),
  //   userEmail: yup
  //     .string()
  //     .email()
  //     .required("Please enter valclassName email"),
  //   userPassword: yup
  //     .string()
  //     .min(6, "Your password must be at least 6 characters")
  //     .required("Please enter a password")
  // })

  const handleChange = e => {
    setPatientReg({
      ...patientReg,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post("/auth/user-register", patientReg)
      .then(res => {
        history.push("/patient-login");

        console.log("register Success", res.data);
      })
      .catch(err => {
        console.log("Registration FAILED", err);
      });
  };

  return (
    <div className="form-cont">
      <NForm onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        {/* <NewLable> Full Name</NewLable> */}
        <NewInput
          className="patient-Form"
          type="text"
          name="userName"
          placeholder="Full Name"
          required
          value={patientReg.userName}
          onChange={handleChange}
        />

        {/* <NewLable>Email</NewLable> */}

        <NewInput
          className="patient-Form"
          type="email"
          name="userEmail"
          placeholder="Email"
          required
          value={patientReg.userEmail}
          onChange={handleChange}
        />

        {/* <NewLable>Password</NewLable> */}

        <NewInput
          className="patient-Form"
          type="password"
          name="userPassword"
          placeholder="Password"
          required
          value={patientReg.userPassword}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </NForm>
    </div>
  );
}

export default PatientRegistrationForm;

// function PatientRegistrationForm({ errors, touched, status, history }) {
//   const [patientReg, setPatientReg] = useState([]);

//   useEffect(() => {
//     if (status) {
//       setPatientReg([...patientReg, status]);
//     }
//     // eslint-disable-next-line
//   }, [status]);

//   // console.log("patientReg", patientReg);

//   return (
//     <LightCard>
// //       <Form>
{
  /* //         <FlexWarp> */
}
{
  /* //           <FormContainer> */
}
//             <NewLable> Full Name</NewLable>
//
//             <input
//               className="patient-Form"
//               type="text"
//               name="userName"
//               placeholder="Full Name"
//             />

//             <NewLable>Email</NewLable>
//             {touched.userEmail && errors.userEmail && <p>{errors.userEmail}</p>}
//             <input
//               className="patient-Form"
//               type="text"
//               name="userEmail"
//               placeholder="Email"
//             />

//             <NewLable>Password</NewLable>
//             {touched.userPassword && errors.userPassword && (
//               <p>{errors.userPassword}</p>
//             )}
//             <input
//               className="patient-Form"
//               type="password"
//               name="userPassword"
//               placeholder="Password"
//             />

//             <Button type="submit">Submit</Button>
//           </FormContainer>
//         </FlexWarp>
// //       </Form>
//     </LightCard>
//   );
// }

// export default withFormik({
//   mapPropsToValues: values => {
//     return {
//       userName: values.userName || "",
//       userEmail: values.userEmail || "",
//       userPassword: values.userPassword || ""
//     };
//   },

//   valclassNameationScheme: yup.object().shape({
//     userName: yup
//       .string()
//       .matches(
//         /^[\w]+$/,
//         "Your username may only contain letters, numbers, and underscore. "
//       )
//       .min(3, "UserName must be at least characters")
//       .required("Please enter your name"),
//     userEmail: yup
//       .string()
//       .email()
//       .required("Please enter valclassName email"),
//     userPassword: yup
//       .string()
//       .min(6, "Your password must be at least 6 characters")
//       .required("Please enter a password")
//   }),

//   handleSubmit: (values, { setStatus }) => {
//     // console.log(" REgistration", values);

//     api()
//       .post("/auth/user-register", values)
//       .then(res => {
//         setStatus(res.data);
//         history.push("/patient-login");

//         console.log("register res", res.data);
//       })
//       .catch(err => {
//         console.log("Registration error", err);
//       });
//   }
// })(PatientRegistrationForm);
