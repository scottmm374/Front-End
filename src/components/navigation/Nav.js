import React from "react";
import { getMedToken } from "../utils/medApi";
import { getToken } from "../utils/api";
import Logo from "../../images/IM-Records.png";
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
  max-width: 45%;
`;

const NLinks = styled(NavItem)`
  font-size: 1.5rem;
`;

const NewNav = styled(Navbar)`
  // position: fixed;
  z-index: 1;
  margin-bottom: 80px;
  background: white;
  box-shadow: 1px 5px 8px lightgrey;
`;

const Navigation = () => {
  const MedSignedIn = getMedToken();
  const PatientSignedIn = getToken();

  return (
    <Container fluid>
      <NewNav light expand="lg">
        <NavbarBrand href="/">
          <NewLogo src={Logo} alt="im logo" />
        </NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NLinks>
            <NavLink href="/">Home</NavLink>
          </NLinks>

          <NLinks className="provider-link">
            <NavLink href="/med">Provider</NavLink>
          </NLinks>
          <NLinks className="patient-link">
            <NavLink href="/patient">Patient</NavLink>
          </NLinks>
          {/* <NLinks>
            {MedSignedIn && <NavLink href="/med-logout">Med Logout</NavLink>}
          </NLinks> */}
          <NLinks>
            {PatientSignedIn && (
              <NavLink href="/patient-home">Patient Home</NavLink>
            )}
          </NLinks>
          <NLinks>
            {MedSignedIn && <NavLink href="/med-account">Med Home</NavLink>}
          </NLinks>
          <NLinks>
            {PatientSignedIn && (
              <NavLink href="/Patient-logout">Logout</NavLink>
            )}
          </NLinks>
          <NLinks>
            {MedSignedIn && <NavLink href="/Med-logout">Logout</NavLink>}
          </NLinks>
        </Nav>
        {/* <NavLink
          className="nav-link"
          href="https://deploy-preview-3--im-record-shawn.netlify.com/"
        >
          Learn More
        </NavLink> */}
      </NewNav>
    </Container>
  );
};

export default Navigation;
