import React, { useState } from "react";

import history from "../../history";
import * as yup from "yup";
import api from "../utils/api";
import {
  Button,
  LightCard,
  NewLable,
  FormContainer,
  FlexWarp
} from "../utils/styledComponents.js";

function PatientRegistrationForm(props) {
  const [patientReg, setPatientReg] = useState({
    userEmail: "",
    userPassword: "",
    userName: ""
  });

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
    <LightCard>
      <form onSubmit={handleSubmit}>
        <FlexWarp>
          <FormContainer>
            <NewLable> Full Name</NewLable>
            <input
              id="imForm"
              type="text"
              name="userName"
              placeholder="Full Name"
              required
              value={patientReg.userName}
              onChange={handleChange}
            />

            <NewLable>Email</NewLable>

            <input
              id="imForm"
              type="email"
              name="userEmail"
              placeholder="Email"
              required
              value={patientReg.userEmail}
              onChange={handleChange}
            />

            <NewLable>Password</NewLable>

            <input
              id="imForm"
              type="password"
              name="userPassword"
              placeholder="Password"
              required
              value={patientReg.userPassword}
              onChange={handleChange}
            />

            <Button type="submit">Submit</Button>
          </FormContainer>
        </FlexWarp>
      </form>
    </LightCard>
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
//       <Form>
//         <FlexWarp>
//           <FormContainer>
//             <NewLable> Full Name</NewLable>
//
//             <input
//               id="imForm"
//               type="text"
//               name="userName"
//               placeholder="Full Name"
//             />

//             <NewLable>Email</NewLable>
//             {touched.userEmail && errors.userEmail && <p>{errors.userEmail}</p>}
//             <input
//               id="imForm"
//               type="text"
//               name="userEmail"
//               placeholder="Email"
//             />

//             <NewLable>Password</NewLable>
//             {touched.userPassword && errors.userPassword && (
//               <p>{errors.userPassword}</p>
//             )}
//             <input
//               id="imForm"
//               type="password"
//               name="userPassword"
//               placeholder="Password"
//             />

//             <Button type="submit">Submit</Button>
//           </FormContainer>
//         </FlexWarp>
//       </Form>
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

//   validationScheme: yup.object().shape({
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
//       .required("Please enter valid email"),
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
