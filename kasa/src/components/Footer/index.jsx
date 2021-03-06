import styled from "styled-components";
import colors from "../../utils/style/colors";
import logo_white from "../../assets/logo_white.png";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  color: ${colors.white};
  background-color: ${colors.black};
`;

const FooterLogo = styled.img`
  height: 30px;
  padding: 30px 0;
`;

const FooterSubtitle = styled.p`
  font-size: 24px;
  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={logo_white} />
      <FooterSubtitle>© 2020 Kasa. All rights reserved</FooterSubtitle>
    </FooterContainer>
  );
}

export default Footer;
