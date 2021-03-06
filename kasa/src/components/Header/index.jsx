import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../../utils/style/Atoms";
import logo from "../../assets/logo.png";

const HomeLogo = styled.img`
  height: 50px;
  @media only screen and (max-width: 500px) {
    height: 40px;
  }
`;

const NavContainer = styled.nav`
  width: 80%;
  margin: auto;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 500px) {
    width: 90%;
    padding: 15px 0px;
  }
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={logo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">À Propos</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
