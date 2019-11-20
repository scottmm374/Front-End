import React from "react";
import { NavLink } from "react-router-dom";
import { getMedToken } from "../utils/medApi";
import { getToken } from "../utils/api";
import Logo from "../../images/Logo.svg";

import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

const Navigation = () => {
  const MedSignedIn = getMedToken();
  const PatientSignedIn = getToken();
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={Logo} alt="im logo" />
        </NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            {MedSignedIn && <NavLink to="med-account">Med Account</NavLink>}
          </NavItem>
          <NavItem>
            {MedSignedIn && <NavLink to="med-logout">Med Logout</NavLink>}
          </NavItem>
          <NavItem>
            {PatientSignedIn && (
              <NavLink to="patient-account">Patient Account</NavLink>
            )}
          </NavItem>
          <NavItem>
            {PatientSignedIn && (
              <NavLink to="patient-logout">Patient Logout</NavLink>
            )}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
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
