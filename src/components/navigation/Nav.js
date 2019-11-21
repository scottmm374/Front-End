import React from "react";
// import { NavLink } from "react-router-dom";
import { getMedToken } from "../utils/medApi";
import { getToken } from "../utils/api";
import Logo from "../../images/Logo.svg";
import styled from "styled-components";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from "reactstrap";

const NewLogo = styled.img`
  border: none;
  &:hover {
    border: 1px solid #32ddaa;
    padding: 3px;
  }
`;

const Navigation = () => {
  const MedSignedIn = getMedToken();
  const PatientSignedIn = getToken();
  return (
    <Container fluid>
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="/">
          <NewLogo src={Logo} alt="im logo" />
        </NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            {MedSignedIn && <NavLink href="/med-account">Med Account</NavLink>}
          </NavItem>
          <NavItem>
            {MedSignedIn && <NavLink href="/med-logout">Med Logout</NavLink>}
          </NavItem>
          <NavItem>
            {PatientSignedIn && (
              <NavLink href="/patient-account">Patient Account</NavLink>
            )}
          </NavItem>
          <NavItem>
            {PatientSignedIn && (
              <NavLink href="/patient-logout">Patient Logout</NavLink>
            )}
          </NavItem>
        </Nav>
        <NavLink
          className="nav-link"
          href="https://im-record-bevin.netlify.com/"
        >
          Learn More
        </NavLink>
      </Navbar>
    </Container>
  );
};

export default Navigation;

// const Nav = () => {
//   const MedSignedIn = getMedToken();
//   const PatientSignedIn = getToken();
//   return (
//     <div>
//       <nav>
//         {/* Med nav for testing, sign in and register remove once everything is in place */}
//         {/* <NavLink to="med-register">Med Register</NavLink> */}
//         {/* Conditionally show links on nav if logged in or not */}
//         {/* {!MedSignedIn && <NavLink to="med-login">Med Sign In</NavLink>} */}
//         {MedSignedIn && <NavLink to="med-account">Med Account</NavLink>}
//         {MedSignedIn && <NavLink to="med-logout">Med Logout</NavLink>}

//         {/* Patient for testing, remove sign in and register once done */}
//         {/* <NavLink to="patient-register">Patient Register</NavLink> */}

//         {/* Conditionally show links on nav if logged in or not */}
//         {/* {!PatientSignedIn && (
//           <NavLink to="patient-login">Patient Sign In</NavLink>
//         )} */}
//         {PatientSignedIn && (
//           <NavLink to="patient-account">Patient Account</NavLink>
//         )}
//         {PatientSignedIn && (
//           <NavLink to="patient-logout">Patient Logout</NavLink>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Nav;
