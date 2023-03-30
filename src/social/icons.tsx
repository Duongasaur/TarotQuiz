import styled from "styled-components";
import facebook from "./svg/facebook.svg";
import instagram from "./svg/instagram.svg";
import pinterest from "./svg/pinterest.svg";

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const FacebookIcon = () => <Icon src={facebook} alt="facebook" />;
export const InstagramIcon = () => <Icon src={instagram} alt="instagram" />;
export const PinterestIcon = () => <Icon src={pinterest} alt="pinterest" />;
