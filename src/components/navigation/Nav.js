import React from "react";
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
              <NavLink href="/patient-home">Patient Account</NavLink>
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
          href="https://deploy-preview-3--im-record-shawn.netlify.com/"
        >
          Learn More
        </NavLink>
      </Navbar>
    </Container>
  );
};

export default Navigation;
